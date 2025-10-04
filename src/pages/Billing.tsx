import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Plus, 
  Minus, 
  Trash2, 
  Download, 
  Send, 
  Search,
  Calculator,
  Sparkles,
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  ShoppingCart,
  FileSpreadsheet,
  Receipt,
  ArrowLeft,
  Edit3,
  Save,
  X,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import { generatePDF, generatePreviewHTML } from '../utils/pdfGenerator';
import { formatNaira, formatNumber } from '../utils/currency';

// Types
interface BillingItem {
  id: string;
  name: string;
  description: string;
  category: string;
  quantity: number;
  unitPrice: number;
  total: number;
  image?: string;
}

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  address?: string;
}

interface Document {
  id: string;
  type: 'quotation' | 'invoice';
  client: Client;
  items: BillingItem[];
  subtotal: number;
  tax: number;
  total: number;
  date: string;
  dueDate?: string;
  status: 'draft' | 'sent' | 'paid';
  notes?: string;
}

// Sample inventory data from DeviceShop with Nigerian Naira pricing
const inventoryItems: BillingItem[] = [
  {
    id: 'starlink-standard',
    name: 'Starlink V4 Standard Kit',
    description: 'High-speed, low-latency internet for residential and business use',
    category: 'starlink',
    quantity: 0,
    unitPrice: 600000,
    total: 0,
    image: '/v4.jpg'
  },
  {
    id: 'starlink-business',
    name: 'Starlink Business High Performance Kit',
    description: 'Enterprise-grade satellite internet with priority support',
    category: 'starlink',
    quantity: 0,
    unitPrice: 2700000,
    total: 0,
    image: '/high_performance.jpg'
  },
  {
    id: 'starlink-mini',
    name: 'Starlink Mini',
    description: 'Compact and portable satellite internet for mobile use',
    category: 'starlink',
    quantity: 0,
    unitPrice: 380000,
    total: 0,
    image: '/mini.jpg'
  },
  {
    id: 'mikrotik-hap-ax2',
    name: 'MikroTik hAP ax²',
    description: 'Dual-band Wi-Fi 6 router with advanced features',
    category: 'routers',
    quantity: 0,
    unitPrice: 180000,
    total: 0,
    image: '/ax2.jpg'
  },
  {
    id: 'mikrotik-hap-ax3',
    name: 'MikroTik hAP ax³',
    description: 'Advanced tri-band Wi-Fi 6 router with superior performance',
    category: 'routers',
    quantity: 0,
    unitPrice: 310000,
    total: 0,
    image: '/ax3.jpg'
  },
  {
    id: 'mikrotik-cap-ax',
    name: 'MikroTik cAP ax',
    description: 'Ceiling-mounted Wi-Fi 6 access point',
    category: 'access-points',
    quantity: 0,
    unitPrice: 300000,
    total: 0,
    image: '/placeholder.svg'
  },
  {
    id: 'tplink-eap670',
    name: 'TP-Link EAP670 Wi-Fi 6 AP',
    description: 'Professional Wi-Fi 6 access point with Omada SDN',
    category: 'access-points',
    quantity: 0,
    unitPrice: 450000,
    total: 0,
    image: '/placeholder.svg'
  },
  {
    id: 'cat6a-cable',
    name: 'CAT6A Ethernet Cable',
    description: 'High-performance network cable for 10Gbps',
    category: 'cables',
    quantity: 0,
    unitPrice: 5000,
    total: 0,
    image: '/placeholder.svg'
  },
  {
    id: 'solar-kit-100w',
    name: '100W Solar Power Kit',
    description: 'Complete solar power solution for remote installations',
    category: 'solar',
    quantity: 0,
    unitPrice: 650000,
    total: 0,
    image: '/placeholder.svg'
  }
];

const Billing = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };
  const [activeTab, setActiveTab] = useState('create');
  const [documentType, setDocumentType] = useState<'quotation' | 'invoice'>('quotation');
  const [naturalLanguageInput, setNaturalLanguageInput] = useState('');
  const [selectedItems, setSelectedItems] = useState<BillingItem[]>([]);
  const [client, setClient] = useState<Client>({
    id: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    address: ''
  });
  const [taxRate, setTaxRate] = useState(15);
  const [notes, setNotes] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCustomItemDialog, setShowCustomItemDialog] = useState(false);
  const [customInventory, setCustomInventory] = useState<BillingItem[]>([]);
  const [customItemForm, setCustomItemForm] = useState({
    name: '',
    description: '',
    category: 'custom',
    unitPrice: 0
  });

  // Load documents and custom inventory from localStorage on component mount
  useEffect(() => {
    const savedDocuments = localStorage.getItem('billing-documents');
    if (savedDocuments) {
      try {
        const parsedDocuments = JSON.parse(savedDocuments);
        setDocuments(parsedDocuments);
      } catch (error) {
        console.error('Error loading documents from localStorage:', error);
      }
    }

    const savedCustomInventory = localStorage.getItem('custom-inventory');
    if (savedCustomInventory) {
      try {
        const parsedInventory = JSON.parse(savedCustomInventory);
        setCustomInventory(parsedInventory);
      } catch (error) {
        console.error('Error loading custom inventory from localStorage:', error);
      }
    }
  }, []);

  // Save documents to localStorage whenever documents change
  useEffect(() => {
    if (documents.length > 0) {
      localStorage.setItem('billing-documents', JSON.stringify(documents));
    }
  }, [documents]);

  // Save custom inventory to localStorage whenever it changes
  useEffect(() => {
    if (customInventory.length > 0) {
      localStorage.setItem('custom-inventory', JSON.stringify(customInventory));
    }
  }, [customInventory]);

  // Calculate totals
  const subtotal = selectedItems.reduce((sum, item) => sum + item.total, 0);
  const tax = (subtotal * taxRate) / 100;
  const total = subtotal + tax;

  // Combine standard and custom inventory
  const allInventoryItems = [...inventoryItems, ...customInventory];

  // Filter inventory items
  const filteredItems = allInventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Natural language processing
  const processNaturalLanguage = async () => {
    if (!naturalLanguageInput.trim()) return;
    
    setIsGenerating(true);
    
    // Simple keyword-based parsing for demo
    const input = naturalLanguageInput.toLowerCase();
    const newItems: BillingItem[] = [];
    
    // Parse quantities and items
    const itemPatterns = [
      { pattern: /(\d+)\s*starlink\s*standard/i, itemId: 'starlink-standard', name: 'Starlink V4 Standard Kit' },
      { pattern: /(\d+)\s*starlinks?/i, itemId: 'starlink-standard', name: 'Starlink V4 Standard Kit' },
      { pattern: /(\d+)\s*starlink\s*business/i, itemId: 'starlink-business', name: 'Starlink Business High Performance Kit' },
      { pattern: /(\d+)\s*starlink\s*mini/i, itemId: 'starlink-mini', name: 'Starlink Mini' },
      { pattern: /(\d+)\s*mikrotik\s*hap\s*ax2/i, itemId: 'mikrotik-hap-ax2', name: 'MikroTik hAP ax²' },
      { pattern: /(\d+)\s*mikrotik\s*hap\s*ax3/i, itemId: 'mikrotik-hap-ax3', name: 'MikroTik hAP ax³' },
      { pattern: /(\d+)\s*mikrotiks?/i, itemId: 'mikrotik-hap-ax2', name: 'MikroTik hAP ax²' },
      { pattern: /(\d+)\s*access\s*points?/i, itemId: 'mikrotik-cap-ax', name: 'MikroTik cAP ax' },
      { pattern: /(\d+)\s*(gigabit|gig)?\s*ethernet\s*cables?/i, itemId: 'cat6a-cable', name: 'CAT6A Ethernet Cable' },
      { pattern: /(\d+)\s*cables?/i, itemId: 'cat6a-cable', name: 'CAT6A Ethernet Cable' },
      { pattern: /(\d+)\s*solar\s*kits?/i, itemId: 'solar-kit-100w', name: '100W Solar Power Kit' },
      { pattern: /(\d+)\s*tp-link/i, itemId: 'tplink-eap670', name: 'TP-Link EAP670 Wi-Fi 6 AP' }
    ];
    
    itemPatterns.forEach(({ pattern, itemId, name }) => {
      const match = input.match(pattern);
      if (match) {
        const quantity = parseInt(match[1]);
        const existingItem = allInventoryItems.find(item => item.id === itemId);
        if (existingItem) {
          const newItem = {
            ...existingItem,
            quantity,
            total: quantity * existingItem.unitPrice
          };
          newItems.push(newItem);
        }
      }
    });
    
    // Add to selected items
    setSelectedItems(prev => {
      const updated = [...prev];
      newItems.forEach(newItem => {
        const existingIndex = updated.findIndex(item => item.id === newItem.id);
        if (existingIndex >= 0) {
          updated[existingIndex].quantity += newItem.quantity;
          updated[existingIndex].total = updated[existingIndex].quantity * updated[existingIndex].unitPrice;
        } else {
          updated.push(newItem);
        }
      });
      return updated;
    });
    
    setNaturalLanguageInput('');
    setIsGenerating(false);
  };

  // Add item to selection
  const addItem = (item: BillingItem) => {
    setSelectedItems(prev => {
      const existingIndex = prev.findIndex(selectedItem => selectedItem.id === item.id);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        updated[existingIndex].total = updated[existingIndex].quantity * updated[existingIndex].unitPrice;
        return updated;
      } else {
        return [...prev, { ...item, quantity: 1, total: item.unitPrice }];
      }
    });
  };

  // Update item quantity
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 0) return;
    
    setSelectedItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity, total: quantity * item.unitPrice }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  // Update item price
  const updatePrice = (id: string, price: number) => {
    setSelectedItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, unitPrice: price, total: item.quantity * price }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id: string) => {
    setSelectedItems(prev => prev.filter(item => item.id !== id));
  };

  // Generate document
  const generateDocument = async () => {
    if (selectedItems.length === 0) return;
    
    const newDocument: Document = {
      id: `DOC-${Date.now()}`,
      type: documentType,
      client,
      items: selectedItems,
      subtotal,
      tax,
      total,
      date: new Date().toISOString().split('T')[0],
      dueDate: dueDate || (documentType === 'invoice' ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] : undefined),
      status: 'draft',
      notes
    };
    
    setDocuments(prev => [newDocument, ...prev]);
    setActiveTab('documents');
    
    // Reset form
    setSelectedItems([]);
    setClient({ id: '', name: '', email: '', phone: '', company: '', address: '' });
    setNotes('');
    setDueDate('');
  };

  // Export to PDF
  const exportToPDF = async (document: Document) => {
    try {
      await generatePDF(document);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback to text file
      const content = `
QUOTATION/INVOICE #${document.id}
Date: ${document.date}
${document.dueDate ? `Due Date: ${document.dueDate}` : ''}

CLIENT INFORMATION:
${document.client.name}
${document.client.company ? document.client.company : ''}
${document.client.email}
${document.client.phone}
${document.client.address ? document.client.address : ''}

ITEMS:
${document.items.map(item => 
  `${item.name} - Qty: ${item.quantity} x ${formatNaira(item.unitPrice)} = ${formatNaira(item.total)}`
).join('\n')}

Subtotal: ${formatNaira(document.subtotal)}
Tax (${taxRate}%): ${formatNaira(document.tax)}
Total: ${formatNaira(document.total)}

${document.notes ? `Notes: ${document.notes}` : ''}
      `;
      
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${document.type}-${document.id}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  // Preview document
  const previewDocument = (document: Document) => {
    const html = generatePreviewHTML(document);
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(html);
      newWindow.document.close();
    }
  };

  // Clear all documents
  const clearAllDocuments = () => {
    if (confirm('Are you sure you want to clear all documents? This action cannot be undone.')) {
      setDocuments([]);
      localStorage.removeItem('billing-documents');
    }
  };

  // Add custom item
  const addCustomItem = () => {
    if (!customItemForm.name || !customItemForm.unitPrice) {
      alert('Please fill in the item name and price');
      return;
    }

    const newItem: BillingItem = {
      id: `custom-${Date.now()}`,
      name: customItemForm.name,
      description: customItemForm.description,
      category: 'custom',
      quantity: 0,
      unitPrice: customItemForm.unitPrice,
      total: 0
    };

    setCustomInventory(prev => [...prev, newItem]);
    setCustomItemForm({ name: '', description: '', category: 'custom', unitPrice: 0 });
    setShowCustomItemDialog(false);
  };

  // Remove custom item
  const removeCustomItem = (itemId: string) => {
    if (confirm('Are you sure you want to remove this custom item?')) {
      setCustomInventory(prev => prev.filter(item => item.id !== itemId));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-white">Moll Technologies - Billing System</h1>
                <p className="text-white/70">Generate quotations and invoices | RC: 7262696</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-white hover:bg-red-500/20 hover:text-red-300 border border-white/20"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-black/50">
            <TabsTrigger value="create" className="data-[state=active]:bg-blue-600">
              <FileText className="h-4 w-4 mr-2" />
              Create Document
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-blue-600">
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="inventory" className="data-[state=active]:bg-blue-600">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Inventory
            </TabsTrigger>
          </TabsList>

          {/* Create Document Tab */}
          <TabsContent value="create" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Document Setup */}
              <div className="space-y-6">
                {/* Document Type Selection */}
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Document Type
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <Button
                        variant={documentType === 'quotation' ? 'default' : 'outline'}
                        onClick={() => setDocumentType('quotation')}
                        className="flex-1"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Quotation
                      </Button>
                      <Button
                        variant={documentType === 'invoice' ? 'default' : 'outline'}
                        onClick={() => setDocumentType('invoice')}
                        className="flex-1"
                      >
                        <Receipt className="h-4 w-4 mr-2" />
                        Invoice
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Natural Language Input */}
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Natural Language Input
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      placeholder="e.g., 'Create an invoice for 5 Starlinks, 6 Mikrotiks and 10 Access Points and 1 GigaBit ethernet cable'"
                      value={naturalLanguageInput}
                      onChange={(e) => setNaturalLanguageInput(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50"
                      rows={3}
                    />
                    <Button
                      onClick={processNaturalLanguage}
                      disabled={isGenerating || !naturalLanguageInput.trim()}
                      className="w-full"
                    >
                      {isGenerating ? (
                        <>
                          <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4 mr-2" />
                          Parse & Add Items
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                {/* Client Information */}
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Client Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Client Name"
                        value={client.name}
                        onChange={(e) => setClient({...client, name: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder-white/50"
                      />
                      <Input
                        placeholder="Email"
                        type="email"
                        value={client.email}
                        onChange={(e) => setClient({...client, email: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder-white/50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Phone"
                        value={client.phone}
                        onChange={(e) => setClient({...client, phone: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder-white/50"
                      />
                      <Input
                        placeholder="Company (Optional)"
                        value={client.company || ''}
                        onChange={(e) => setClient({...client, company: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder-white/50"
                      />
                    </div>
                    <Textarea
                      placeholder="Address (Optional)"
                      value={client.address || ''}
                      onChange={(e) => setClient({...client, address: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50"
                      rows={2}
                    />
                  </CardContent>
                </Card>

                {/* Document Settings */}
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Calculator className="h-5 w-5 mr-2" />
                      Document Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <label className="text-white text-sm">Tax Rate:</label>
                      <Input
                        type="number"
                        value={taxRate}
                        onChange={(e) => setTaxRate(Number(e.target.value))}
                        className="w-20 bg-white/10 border-white/20 text-white"
                      />
                      <span className="text-white/70">%</span>
                    </div>
                    {documentType === 'invoice' && (
                      <div>
                        <label className="text-white text-sm block mb-2">Due Date:</label>
                        <Input
                          type="date"
                          value={dueDate}
                          onChange={(e) => setDueDate(e.target.value)}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                    )}
                    <div>
                      <label className="text-white text-sm block mb-2">Notes:</label>
                      <Textarea
                        placeholder="Additional notes or terms..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder-white/50"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Selected Items & Summary */}
              <div className="space-y-6">
                {/* Selected Items */}
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      <span className="flex items-center">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Selected Items ({selectedItems.length})
                      </span>
                      <Badge variant="secondary" className="bg-blue-600">
                        {formatNaira(total)}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedItems.length === 0 ? (
                      <div className="text-center py-8 text-white/70">
                        <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No items selected</p>
                        <p className="text-sm">Use natural language input or browse inventory</p>
                      </div>
                    ) : (
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {selectedItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg">
                            <div className="flex-1">
                              <h4 className="text-white font-medium">{item.name}</h4>
                              <p className="text-white/70 text-sm">{item.description}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-white w-8 text-center">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <div className="w-20">
                              <Input
                                type="number"
                                value={item.unitPrice}
                                onChange={(e) => updatePrice(item.id, Number(e.target.value))}
                                className="bg-white/10 border-white/20 text-white text-sm"
                              />
                            </div>
                            <div className="w-20 text-right">
                              <span className="text-white font-medium">{formatNaira(item.total)}</span>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeItem(item.id)}
                              className="h-8 w-8 p-0 text-red-400 hover:text-red-300"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Summary */}
                <Card className="bg-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Calculator className="h-5 w-5 mr-2" />
                      Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-white/70">
                      <span>Subtotal:</span>
                      <span>{formatNaira(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Tax ({taxRate}%):</span>
                      <span>{formatNaira(tax)}</span>
                    </div>
                    <div className="border-t border-white/20 pt-3">
                      <div className="flex justify-between text-white text-lg font-bold">
                        <span>Total:</span>
                        <span>{formatNaira(total)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Generate Button */}
                <Button
                  onClick={generateDocument}
                  disabled={selectedItems.length === 0 || !client.name || !client.email}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Generate {documentType === 'quotation' ? 'Quotation' : 'Invoice'}
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card className="bg-black/50 border-white/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <FileSpreadsheet className="h-5 w-5 mr-2" />
                    Generated Documents ({documents.length})
                  </CardTitle>
                  {documents.length > 0 && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={clearAllDocuments}
                      className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear All
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {documents.length === 0 ? (
                  <div className="text-center py-8 text-white/70">
                    <FileSpreadsheet className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No documents generated yet</p>
                    <p className="text-sm">Create your first quotation or invoice</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-blue-600 rounded-lg">
                            {doc.type === 'quotation' ? (
                              <FileText className="h-5 w-5 text-white" />
                            ) : (
                              <Receipt className="h-5 w-5 text-white" />
                            )}
                          </div>
                          <div>
                            <h3 className="text-white font-medium">
                              {doc.type === 'quotation' ? 'Quotation' : 'Invoice'} #{doc.id}
                            </h3>
                            <p className="text-white/70 text-sm">
                              {doc.client.name} • {doc.date} • {formatNaira(doc.total)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={doc.status === 'paid' ? 'default' : doc.status === 'sent' ? 'secondary' : 'outline'}
                            className={doc.status === 'paid' ? 'bg-green-600' : doc.status === 'sent' ? 'bg-blue-600' : ''}
                          >
                            {doc.status}
                          </Badge>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => previewDocument(doc)}
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => exportToPDF(doc)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <Input
                    placeholder="Search inventory..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="starlink">Starlink</SelectItem>
                  <SelectItem value="routers">Routers</SelectItem>
                  <SelectItem value="access-points">Access Points</SelectItem>
                  <SelectItem value="cables">Cables</SelectItem>
                  <SelectItem value="solar">Solar</SelectItem>
                  <SelectItem value="custom">Custom Items</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={() => setShowCustomItemDialog(true)}
                className="bg-green-600 hover:bg-green-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Custom Item
              </Button>
            </div>

            {/* Inventory Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="bg-black/50 border-white/10 hover:border-white/30 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1">{item.name}</h3>
                        <p className="text-white/70 text-sm mb-2">{item.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <div className="text-right flex flex-col items-end space-y-2">
                        <p className="text-white font-bold">{formatNaira(item.unitPrice)}</p>
                        {item.category === 'custom' && (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeCustomItem(item.id)}
                            className="h-6 w-6 p-0 text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={() => addItem(item)}
                      className="w-full"
                      size="sm"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add to Selection
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Custom Item Dialog */}
      <Dialog open={showCustomItemDialog} onOpenChange={setShowCustomItemDialog}>
        <DialogContent className="bg-black/90 border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Add Custom Item
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Item Name *
              </label>
              <Input
                placeholder="Enter item name"
                value={customItemForm.name}
                onChange={(e) => setCustomItemForm({...customItemForm, name: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder-white/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Description
              </label>
              <Textarea
                placeholder="Enter item description"
                value={customItemForm.description}
                onChange={(e) => setCustomItemForm({...customItemForm, description: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder-white/50"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Unit Price (₦) *
              </label>
              <Input
                type="number"
                placeholder="Enter price"
                value={customItemForm.unitPrice}
                onChange={(e) => setCustomItemForm({...customItemForm, unitPrice: Number(e.target.value)})}
                className="bg-white/10 border-white/20 text-white placeholder-white/50"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={addCustomItem}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowCustomItemDialog(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Billing;
