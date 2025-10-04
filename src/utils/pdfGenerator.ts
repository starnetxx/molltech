import { Document, BillingItem, Client } from '../pages/Billing';
import { formatNaira, formatNumber } from './currency';

export const generateImage = async (document: Document): Promise<void> => {
  // Create HTML content for the document
  const htmlContent = generatePreviewHTML(document);
  
  // Create a new window with the HTML content
  const newWindow = window.open('', '_blank');
  if (!newWindow) {
    alert('Please allow popups to download the image');
    return;
  }
  
  newWindow.document.write(htmlContent);
  newWindow.document.close();
  
  // Wait for content to load, then capture as image
  setTimeout(async () => {
    try {
      // Use html2canvas to capture only the document content
      const html2canvas = (await import('html2canvas')).default;
      const documentElement = newWindow.document.querySelector('.document') as HTMLElement;
      
      if (!documentElement) {
        throw new Error('Document element not found');
      }
      
      const canvas = await html2canvas(documentElement, {
        scale: 2, // Higher resolution
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: documentElement.scrollWidth,
        height: documentElement.scrollHeight,
        logging: false, // Disable console logs
        removeContainer: true, // Remove container elements
        imageTimeout: 0, // No timeout for images
        scrollX: 0,
        scrollY: 0
      });
      
      // Convert canvas to image and download
      const link = newWindow.document.createElement('a');
      link.download = `${document.type}-${document.id}.png`;
      link.href = canvas.toDataURL('image/png');
      newWindow.document.body.appendChild(link);
      link.click();
      newWindow.document.body.removeChild(link);
      
      // Close the temporary window
      newWindow.close();
    } catch (error) {
      console.error('Error generating image:', error);
      alert('Error generating image. Please try again.');
      newWindow.close();
    }
  }, 2000); // Wait 2 seconds for content to load
};

// Function to open print-friendly version for browser PDF save
export const generatePrintView = (document: Document): void => {
  const htmlContent = generatePreviewHTML(document);
  const newWindow = window.open('', '_blank');
  if (!newWindow) {
    alert('Please allow popups to view the document');
    return;
  }
  
  newWindow.document.write(htmlContent);
  newWindow.document.close();
  
  // Wait for content to load, then trigger print dialog
  setTimeout(() => {
    newWindow.focus();
    newWindow.print();
  }, 1000);
};

export const generatePreviewHTML = (document: Document): string => {
  const companyName = "MOLL TECHNOLOGIES";
  const companyRC = "RC: 7262696";
  const companyTagline = "Innovative Technology Solutions for Africa";
  const companyEmail = "mollelectechnigltd@gmail.com";
  const companyPhone = "+234 702 555 4008";
  const companyAddress = "2, Martin Oti Street, Guzape, Kwali, Abuja, FCT, Nigeria";

  const clientAddressHtml = document.client.address ? `<div style="margin-top: 4px;">${document.client.address}</div>` : '';
  const dueDateHtml = document.dueDate ? `<div style="margin-top: 4px;">Due: ${document.dueDate}</div>` : '';
  const notesHtml = document.notes ? `
    <div class="notes-section">
      <div class="notes-title">Notes:</div>
      <div class="notes-content">${document.notes}</div>
    </div>
  ` : '';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${document.type.toUpperCase()} - ${document.id}</title>
      <style>
        @media print {
          body { 
            margin: 0; 
            padding: 0; 
            background: white !important;
          }
          .document {
            box-shadow: none !important;
            margin: 0 !important;
          }
        }
        body { 
          font-family: 'Inter', sans-serif; 
          margin: 0; 
          padding: 0; 
          background-color: #ffffff; 
          color: #374151; 
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
        }
        .document { 
          width: 210mm; 
          min-height: 297mm; 
          margin: 20px auto; 
          background-color: #ffffff; 
          box-shadow: 0 0 10px rgba(0,0,0,0.1); 
          overflow: hidden;
          position: relative;
        }
        .header { 
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e293b 100%);
          color: white; 
          padding: 30px; 
          text-align: center; 
        }
        .company-name { 
          font-size: 28px; 
          font-weight: bold; 
          margin-bottom: 8px; 
        }
        .company-tagline { 
          font-size: 14px; 
          margin-top: 2px; 
          font-weight: 600;
        }
        .document-details { 
          text-align: right; 
        }
        .document-info {
          padding: 15px 20px;
          margin-top: 20px;
        }
        .document-type { 
          font-size: 22px; 
          font-weight: bold; 
          margin-bottom: 5px; 
        }
        .document-id { 
          font-size: 11px; 
        }
        .client-section { 
          background-color: #f3f4f6; 
          padding: 15px 20px; 
          margin-top: 20px; 
          border-radius: 8px; 
        }
        .client-title { 
          font-size: 13px; 
          font-weight: bold; 
          color: #1f2937; 
          margin-bottom: 5px; 
        }
        .client-details div { 
          font-size: 11px; 
          margin-top: 2px; 
        }
        .items-table { 
          width: calc(100% - 40px); 
          margin: 20px auto; 
          border-collapse: collapse; 
        }
        .items-table th, .items-table td { 
          padding: 10px; 
          text-align: left; 
          border-bottom: 1px solid #e5e7eb; 
        }
        .items-table th { 
          background-color: #1e3a8a; 
          color: #ffffff; 
          font-size: 11px; 
          font-weight: bold; 
        }
        .items-table tr:nth-child(even) { 
          background-color: #f9fafb; 
        }
        .items-table td { 
          font-size: 10px; 
          color: #374151; 
        }
        .totals-section { 
          width: calc(100% - 40px); 
          margin: 20px auto; 
          text-align: right; 
        }
        .totals-row { 
          display: flex; 
          justify-content: flex-end; 
          margin-top: 5px; 
        }
        .totals-label { 
          font-size: 11px; 
          font-weight: normal; 
          color: #4b5563; 
          width: 80px; 
        }
        .totals-value { 
          font-size: 11px; 
          font-weight: normal; 
          color: #374151; 
          width: 80px; 
          text-align: right; 
        }
        .total-row { 
          border-top: 1px solid #e5e7eb; 
          padding-top: 5px; 
          margin-top: 10px; 
        }
        .total-label { 
          font-size: 14px; 
          font-weight: bold; 
          color: #1e3a8a; 
          width: 80px; 
        }
        .total-value { 
          font-size: 14px; 
          font-weight: bold; 
          color: #1e3a8a; 
          width: 80px; 
          text-align: right; 
        }
        .notes-section { 
          width: calc(100% - 40px); 
          margin: 20px auto; 
          padding: 15px; 
          background-color: #f3f4f6; 
          border-radius: 8px; 
        }
        .notes-title { 
          font-size: 13px; 
          font-weight: bold; 
          color: #1f2937; 
          margin-bottom: 5px; 
        }
        .notes-content { 
          font-size: 11px; 
          color: #374151; 
          line-height: 1.5; 
        }
        .footer { 
          background-color: #374151; 
          color: #ffffff; 
          padding: 20px; 
          text-align: center; 
          font-size: 10px; 
          margin-top: 30px; 
          position: relative; 
        }
        .footer a { 
          color: #60a5fa; 
          text-decoration: underline; 
        }
        .status-badge { 
          position: absolute; 
          top: 10px; 
          right: 20px; 
          padding: 5px 10px; 
          border-radius: 5px; 
          font-weight: bold; 
          font-size: 8px; 
          color: white; 
        }
        .status-paid { 
          background-color: #22c55e; 
        }
        .status-sent { 
          background-color: #1e3a8a; 
        }
        .status-draft { 
          background-color: #ef4444; 
        }
        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
        }
        .logo-container img {
          height: 60px;
          width: auto;
          margin-right: 15px;
        }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    </head>
    <body>
      <div class="document">
        <div class="header">
          <div class="logo-container">
            <img src="/molllogo.png" alt="Moll Technologies Logo" onerror="this.style.display='none'">
            <div>
              <div class="company-tagline">RC: 7262696</div>
            </div>
          </div>
          <div style="font-size: 12px;">
            Innovative Technology Solutions for Africa • mollelectechnigltd@gmail.com • +234 702 555 4008<br>
            Address: 2, Martin Oti Street, Guzape, Kwali, Abuja, FCT, Nigeria
          </div>
        </div>
        
        <div class="document-info">
          <div class="document-type">${document.type.toUpperCase()}</div>
          <div class="document-id">#${document.id}</div>
          <div style="margin-top: 8px;">Date: ${document.date}</div>
          ${dueDateHtml}
        </div>

        <div class="client-section">
          <div class="client-title">BILL TO:</div>
          <div class="client-details">
            <div>${document.client.name}</div>
            ${document.client.company ? `<div>${document.client.company}</div>` : ''}
            <div>${document.client.email}</div>
            <div>${document.client.phone}</div>
            ${clientAddressHtml}
          </div>
        </div>

        <table class="items-table">
          <thead>
            <tr>
              <th>Description</th>
              <th style="width: 60px;">Qty</th>
              <th style="width: 80px; text-align: right;">Unit Price</th>
              <th style="width: 80px; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${document.items.map(item => `
              <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td style="text-align: right;">${formatNaira(item.unitPrice)}</td>
                <td style="text-align: right;">${formatNaira(item.total)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="totals-section">
          <div class="totals-row">
            <div class="totals-label">Subtotal:</div>
            <div class="totals-value">${formatNaira(document.subtotal)}</div>
          </div>
          <div class="totals-row">
            <div class="totals-label">Tax (${(document.tax / document.subtotal * 100).toFixed(0)}%):</div>
            <div class="totals-value">${formatNaira(document.tax)}</div>
          </div>
          <div class="totals-row total-row">
            <div class="total-label">TOTAL:</div>
            <div class="total-value">${formatNaira(document.total)}</div>
          </div>
        </div>

        ${notesHtml}
        
        <div class="footer">
          <div>Thank you for your business!</div>
          <div style="margin-top: 8px;">
            For any questions, contact us at mollelectechnigltd@gmail.com<br>
            Phone: +234 702 555 4008 | Address: 2, Martin Oti Street, Guzape, Kwali, Abuja, FCT, Nigeria
            <span class="status-badge status-${document.status}">${document.status}</span>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};