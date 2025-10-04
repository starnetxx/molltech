import jsPDF from 'jspdf';
import { Document, BillingItem, Client } from '../pages/Billing';
import { formatNaira, formatNumber } from './currency';

export const generatePDF = async (document: Document): Promise<void> => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  
  // Colors - matching the HTML design
  const primaryBlue = [59, 130, 246]; // Blue-500
  const secondaryGreen = [16, 185, 129]; // Green-500
  const darkGray = [55, 65, 81]; // Gray-700
  const lightGray = [243, 244, 246]; // Gray-100
  const white = [255, 255, 255];
  const veryLightGray = [248, 250, 252];
  
  // Create beautiful gradient header background
  pdf.setFillColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  pdf.rect(0, 0, pageWidth, 55, 'F');
  
  // Add gradient effect (simplified - blue to green)
  pdf.setFillColor(secondaryGreen[0], secondaryGreen[1], secondaryGreen[2]);
  pdf.rect(pageWidth * 0.6, 0, pageWidth * 0.4, 55, 'F');
  
  // Company Logo and Info
  pdf.setFontSize(26);
  pdf.setTextColor(white[0], white[1], white[2]);
  pdf.setFont('helvetica', 'bold');
  pdf.text('MOLL TECHNOLOGIES', 20, 20);
  
  pdf.setFontSize(14);
  pdf.setTextColor(white[0], white[1], white[2]);
  pdf.setFont('helvetica', 'normal');
  pdf.text('RC: 7262696', 20, 28);
  
  pdf.setFontSize(10);
  pdf.setTextColor(white[0], white[1], white[2]);
  pdf.text('Innovative Technology Solutions for Africa', 20, 35);
  pdf.text('Email: mollelectechnigltd@gmail.com', 20, 40);
  pdf.text('Phone: +234 702 555 4008', 20, 45);
  pdf.text('Address: 2, Martin Oti Street, Guzape, Kwali, Abuja, FCT', 20, 50);
  
  // Document Type and Number (right side)
  pdf.setFontSize(22);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(white[0], white[1], white[2]);
  pdf.text(document.type.toUpperCase(), pageWidth - 90, 20);
  
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(white[0], white[1], white[2]);
  pdf.text(`#${document.id}`, pageWidth - 90, 28);
  pdf.text(`Date: ${document.date}`, pageWidth - 90, 33);
  if (document.dueDate) {
    pdf.text(`Due: ${document.dueDate}`, pageWidth - 90, 38);
  }
  
  // Client Information Section with background
  const clientY = 70;
  pdf.setFillColor(lightGray[0], lightGray[1], lightGray[2]);
  pdf.rect(20, clientY - 8, pageWidth - 40, 40, 'F');
  
  pdf.setFontSize(13);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  pdf.text('BILL TO:', 25, clientY);
  
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(11);
  pdf.text(document.client.name, 25, clientY + 7);
  if (document.client.company) {
    pdf.text(document.client.company, 25, clientY + 13);
  }
  pdf.text(document.client.email, 25, clientY + 19);
  pdf.text(document.client.phone, 25, clientY + 25);
  if (document.client.address) {
    pdf.text(document.client.address, 25, clientY + 31);
  }
  
  // Items Table with better styling
  const tableY = clientY + 45;
  const tableWidth = pageWidth - 40;
  const colWidths = [110, 25, 40]; // Description, Qty, Total
  const rowHeight = 12;
  
  // Table Header with gradient
  pdf.setFillColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  pdf.rect(20, tableY, tableWidth, rowHeight, 'F');
  
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(white[0], white[1], white[2]);
  pdf.text('Description', 25, tableY + 7);
  pdf.text('Qty', 25 + colWidths[0] + 5, tableY + 7);
  pdf.text('Total', 25 + colWidths[0] + colWidths[1] + 10, tableY + 7);
  
  // Table Rows with alternating colors
  let currentY = tableY + rowHeight;
  pdf.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  
  document.items.forEach((item, index) => {
    // Alternate row colors
    if (index % 2 === 0) {
      pdf.setFillColor(veryLightGray[0], veryLightGray[1], veryLightGray[2]);
      pdf.rect(20, currentY, tableWidth, rowHeight, 'F');
    }
    
    // Item description
    pdf.text(item.name, 25, currentY + 7);
    
    // Quantity
    pdf.text(item.quantity.toString(), 25 + colWidths[0] + 5, currentY + 7);
    
    // Total (calculated total amount)
    pdf.text(formatNaira(item.total), 25 + colWidths[0] + colWidths[1] + 10, currentY + 7);
    
    currentY += rowHeight;
  });
  
  // Totals Section with beautiful styling
  const totalsY = currentY + 20;
  const totalsX = pageWidth - 130;
  
  // Totals background
  pdf.setFillColor(249, 250, 251);
  pdf.rect(totalsX - 15, totalsY - 10, 125, 45, 'F');
  
  // Add border
  pdf.setDrawColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  pdf.setLineWidth(2);
  pdf.rect(totalsX - 15, totalsY - 10, 125, 45);
  
  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
  
  // Subtotal
  pdf.text('Subtotal:', totalsX, totalsY);
  pdf.text(formatNaira(document.subtotal), totalsX + 60, totalsY);
  
  // Tax
  pdf.text('Tax:', totalsX, totalsY + 10);
  pdf.text(formatNaira(document.tax), totalsX + 60, totalsY + 10);
  
  // Total with emphasis
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(14);
  pdf.setTextColor(primaryBlue[0], primaryBlue[1], primaryBlue[2]);
  pdf.text('TOTAL:', totalsX, totalsY + 25);
  pdf.text(formatNaira(document.total), totalsX + 60, totalsY + 25);
  
  // Notes Section with styling
  if (document.notes) {
    const notesY = totalsY + 50;
    pdf.setFillColor(lightGray[0], lightGray[1], lightGray[2]);
    pdf.rect(20, notesY - 8, pageWidth - 40, 30, 'F');
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(darkGray[0], darkGray[1], darkGray[2]);
    pdf.text('Notes:', 25, notesY);
    pdf.setFont('helvetica', 'normal');
    
    const maxWidth = pageWidth - 50;
    const notesLines = pdf.splitTextToSize(document.notes, maxWidth);
    pdf.text(notesLines, 25, notesY + 7);
  }
  
  // Footer with gradient
  const footerY = pageHeight - 45;
  pdf.setFillColor(darkGray[0], darkGray[1], darkGray[2]);
  pdf.rect(0, footerY - 8, pageWidth, 45, 'F');
  
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(white[0], white[1], white[2]);
  pdf.text('Thank you for your business!', 20, footerY);
  pdf.text('For any questions, contact us at mollelectechnigltd@gmail.com', 20, footerY + 7);
  pdf.text('Phone: +234 702 555 4008 | Address: 2, Martin Oti Street, Guzape, Kwali, Abuja, FCT', 20, footerY + 14);
  
  // Status badge with better styling
  if (document.status !== 'draft') {
    const statusColor = document.status === 'paid' ? 
      [34, 197, 94] : document.status === 'sent' ? 
      [59, 130, 246] : [156, 163, 175];
    
    pdf.setFillColor(statusColor[0], statusColor[1], statusColor[2]);
    pdf.setTextColor(white[0], white[1], white[2]);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    const statusText = document.status.toUpperCase();
    const statusWidth = pdf.getTextWidth(statusText) + 16;
    pdf.roundedRect(pageWidth - statusWidth - 20, footerY - 20, statusWidth, 12, 6, 6, 'F');
    pdf.text(statusText, pageWidth - statusWidth - 12, footerY - 12);
  }
  
  // Save the PDF
  const fileName = `${document.type}-${document.id}-${document.client.name.replace(/\s+/g, '-')}.pdf`;
  pdf.save(fileName);
};

export const generatePreviewHTML = (document: Document): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${document.type.toUpperCase()} #${document.id}</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          padding: 20px;
          background: #f8fafc;
          color: #374151;
        }
        .document {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
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
          opacity: 0.9;
        }
        .document-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background: #f3f4f6;
          border-bottom: 1px solid #e5e7eb;
        }
        .document-type {
          font-size: 24px;
          font-weight: bold;
          color: #3b82f6;
        }
        .document-details {
          text-align: right;
          font-size: 14px;
        }
        .client-info {
          padding: 30px;
          border-bottom: 1px solid #e5e7eb;
        }
        .client-title {
          font-weight: bold;
          margin-bottom: 15px;
          color: #374151;
        }
        .items-table {
          width: 100%;
          border-collapse: collapse;
        }
        .items-table th {
          background: #3b82f6;
          color: white;
          padding: 12px;
          text-align: left;
          font-weight: bold;
        }
        .items-table td {
          padding: 12px;
          border-bottom: 1px solid #e5e7eb;
        }
        .items-table tr:nth-child(even) {
          background: #f9fafb;
        }
        .totals {
          padding: 30px;
          background: #f9fafb;
        }
        .totals-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .total-row {
          font-weight: bold;
          font-size: 18px;
          border-top: 2px solid #3b82f6;
          padding-top: 8px;
          margin-top: 8px;
        }
        .notes {
          padding: 30px;
          border-top: 1px solid #e5e7eb;
        }
        .notes-title {
          font-weight: bold;
          margin-bottom: 10px;
        }
        .footer {
          background: #374151;
          color: white;
          padding: 20px 30px;
          text-align: center;
          font-size: 14px;
        }
        .status-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
        }
        .status-${document.status} {
          background: ${
            document.status === 'paid' ? '#10b981' : 
            document.status === 'sent' ? '#3b82f6' : 
            '#6b7280'
          };
          color: white;
        }
      </style>
    </head>
    <body>
      <div class="document">
        <div class="header">
          <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <img src="/logo.png" alt="Moll Technologies Logo" style="height: 40px; margin-right: 15px;" onerror="this.style.display='none'">
            <div>
              <div class="company-name">MOLL TECHNOLOGIES</div>
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
          <div class="document-details">
            <div>#${document.id}</div>
            <div>Date: ${document.date}</div>
            ${document.dueDate ? `<div>Due: ${document.dueDate}</div>` : ''}
          </div>
        </div>
        
        <div class="client-info">
          <div class="client-title">BILL TO:</div>
          <div>${document.client.name}</div>
          ${document.client.company ? `<div>${document.client.company}</div>` : ''}
          <div>${document.client.email}</div>
          <div>${document.client.phone}</div>
          ${document.client.address ? `<div>${document.client.address}</div>` : ''}
        </div>
        
        <table class="items-table">
          <thead>
            <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${document.items.map(item => `
              <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${formatNaira(item.total)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="totals">
          <div class="totals-row">
            <span>Subtotal:</span>
            <span>${formatNaira(document.subtotal)}</span>
          </div>
          <div class="totals-row">
            <span>Tax:</span>
            <span>${formatNaira(document.tax)}</span>
          </div>
          <div class="totals-row total-row">
            <span>TOTAL:</span>
            <span>${formatNaira(document.total)}</span>
          </div>
        </div>
        
        ${document.notes ? `
          <div class="notes">
            <div class="notes-title">Notes:</div>
            <div>${document.notes}</div>
          </div>
        ` : ''}
        
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