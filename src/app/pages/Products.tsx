import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, FlaskConical, Droplets, Atom, Sparkles, ShoppingCart, X, Send, Check } from "lucide-react";
import { Link } from "react-router";

// Product data structure based on Excel
const productData = {
  "Stage-1: Inorganic / Bulk Chemicals": {
    icon: <Atom className="w-6 h-6" />,
    color: "slate",
    subcategories: {
      "Acetates & Others": [
        { name: "Ammonium Acetate", cas: "631-61-8" },
        { name: "Sodium Acetate Anhydrous", cas: "127-09-3" },
        { name: "Sodium Chlorate (Common Salt)", cas: "7647-14-5" },
        { name: "Potassium Acetate", cas: "127-08-2" }
      ],
      "Acids": [
        { name: "Acetic Acid", cas: "64-19-7" },
        { name: "Boric Acid Granular / Powder", cas: "10043-35-3" },
        { name: "Chlorosulfonic Acid", cas: "7790-94-5" },
        { name: "HBR in Acetic Acid 33%", cas: "37348-16-6" },
        { name: "HBR in Water 48%", cas: "10035-10-6" },
        { name: "Hydrochloric Acid 30-32%", cas: "7647-01-0" },
        { name: "Hydrogen Peroxide 50%", cas: "7722-84-1" },
        { name: "Sulphamic Acid", cas: "5329-14-6" },
        { name: "Sulphuric Acid 98%", cas: "7664-93-9" },
        { name: "Nitric Acid (60%, 72%, 98%)", cas: "7697-37-2" }
      ],
      "Bases": [
        { name: "Caustic Potash Flakes", cas: "1310-58-3" },
        { name: "Caustic Soda Flakes", cas: "1310-73-2" },
        { name: "Caustic Soda Lye", cas: "1310-73-2" },
        { name: "Calcium Hydroxide", cas: "1305-62-0" },
        { name: "Hydrated Lime", cas: "1305-62-0" },
        { name: "Liq. Ammonia", cas: "1336-21-6" },
        { name: "Magnesium Hydroxide", cas: "1309-42-8" },
        { name: "Sodium Methoxide", cas: "124-41-4" }
      ],
      "Carbonates & Bicarbonates": [
        { name: "Ammonium Bicarbonate", cas: "1066-33-7" },
        { name: "Ammonium Carbonate", cas: "506-87-6" },
        { name: "Magnesium Carbonate", cas: "546-93-0" },
        { name: "Potassium Carbonate", cas: "584-08-7" },
        { name: "Soda Ash", cas: "497-19-8" },
        { name: "Sodium Bicarbonate", cas: "144-55-8" }
      ],
      "Chlorides & Halides": [
        { name: "Aluminium Chloride", cas: "7446-70-0" },
        { name: "Bleaching Powder", cas: "7778-54-3" },
        { name: "Calcium Chloride Fused", cas: "10043-52-4" },
        { name: "Calcium Chloride Granules", cas: "10043-52-4" },
        { name: "Calcium Chloride Liquid", cas: "10043-52-4" },
        { name: "Calcium Chloride Powder", cas: "10043-52-4" },
        { name: "Ferric Chloride Anhydrous", cas: "7705-08-0" },
        { name: "Potassium Iodide", cas: "7681-11-0" },
        { name: "Sodium Hypochlorite", cas: "7681-52-9" },
        { name: "Sodium Iodide", cas: "7681-82-5" },
        { name: "Zinc Chloride", cas: "7440-66-6" }
      ],
      "Halogens": [
        { name: "Liq. Bromine", cas: "7726-95-6" }
      ],
      "Metals & Elemental": [
        { name: "Activated Carbon", cas: "7440-44-0" },
        { name: "Antimony Metal", cas: "7440-36-0" },
        { name: "Cast Iron Powder", cas: "7439-89-6" },
        { name: "Copper Powder", cas: "7440-50-8" },
        { name: "Magnesium Turning", cas: "7439-95-4" },
        { name: "Sulphur Powder", cas: "7704-34-9" },
        { name: "Zinc Dust", cas: "7440-66-6" }
      ],
      "Nitrates & Nitrites": [
        { name: "Potassium Nitrate", cas: "7757-79-1" },
        { name: "Silver Nitrate", cas: "7761-88-8" },
        { name: "Sodium Nitrate", cas: "7631-99-4" },
        { name: "Sodium Nitrite", cas: "7632-00-0" }
      ],
      "Oxides": [
        { name: "Magnesium Oxide", cas: "1309-48-4" },
        { name: "Zinc Oxide", cas: "1314-13-2" },
        { name: "Dry Ice (Solid Carbon Dioxide)", cas: "124-38-9" }
      ],
      "Sulfates & Sulfonates": [
        { name: "Aluminium Sulphate", cas: "10043-01-3" },
        { name: "Copper Sulphate", cas: "7758-98-7" },
        { name: "Ferrous Sulphate", cas: "7720-78-7" },
        { name: "Magnesium Sulphate", cas: "7487-88-9" },
        { name: "Manganese Sulphate", cas: "10034-96-5" },
        { name: "Non Ferric Alum Powder", cas: "10043-01-3" },
        { name: "Sodium Bi Sulphate", cas: "7681-38-1" },
        { name: "Sodium Bi Sulphite", cas: "7631-90-5" },
        { name: "Sodium Hydrosulfite", cas: "7775-14-6" },
        { name: "Sodium Meta Bi. Sulphite", cas: "7681-57-4" },
        { name: "Sodium Sulphate", cas: "7757-82-6" },
        { name: "Sodium Sulphide Flakes", cas: "1313-82-2" },
        { name: "Sodium Sulphite", cas: "7757-83-7" },
        { name: "Sodium Thio Sulphate", cas: "7772-98-7" }
      ],
      "Filler Aids & Adsorbents": [
        { name: "Hyflo Supercel", cas: "68855-54-9" },
        { name: "Silica Gel / Powder", cas: "112926-00-8" }
      ]
    }
  },
  "Stage-2: Organic Solvents & Intermediates": {
    icon: <Droplets className="w-6 h-6" />,
    color: "blue",
    subcategories: {
      "Solvents & Others": [
        { name: "Acetonitrile", cas: "75-05-8" },
        { name: "Dimethyl Sulfoxide (DMSO)", cas: "67-68-5" },
        { name: "Trimethylchlorosilane Iodide", cas: "1774-47-6" },
        { name: "Triisopropylsilane", cas: "6485-79-6" }
      ],
      "Acids": [
        { name: "Ortho-Chlorobenzoic Acid (OCBA)", cas: "118-91-2" },
        { name: "Oxalic Acid", cas: "144-62-7" },
        { name: "Para Toluene Sulfonic Acid (PTSA)", cas: "104-15-4" }
      ],
      "Amides": [
        { name: "Di Methyl Formamide (DMF)", cas: "68-12-2" }
      ],
      "Amines": [
        { name: "Meta Aminophenol (MAP)", cas: "62-53-3" },
        { name: "Mono Methyl Aniline", cas: "100-61-8" },
        { name: "Para Amino Phenol", cas: "123-30-8" },
        { name: "Para Anisidine", cas: "104-94-9" },
        { name: "Tri Ethyl Amine", cas: "121-44-8" }
      ],
      "Aromatics": [
        { name: "Benzaldehyde", cas: "100-52-7" },
        { name: "Mono Chloro Benzene", cas: "108-90-7" },
        { name: "Ortho Dichloro Benzene (O.D.C.B.)", cas: "95-50-1" },
        { name: "Ortho Xylene", cas: "95-47-6" },
        { name: "Toluene", cas: "108-88-3" }
      ],
      "Alcohols": [
        { name: "Benzyl Alcohol", cas: "100-51-6" },
        { name: "Isobutanol", cas: "78-83-1" },
        { name: "Isopropyl Alcohol (IPA)", cas: "67-63-0" },
        { name: "Isopropyl Alcohol Hydrochloride (IPA HCL)", cas: "67-63-0/7647-01-0" },
        { name: "N Propanol", cas: "71-23-8" },
        { name: "N Butanol", cas: "71-36-3" }
      ],
      "Esters": [
        { name: "Diethyl Oxalate", cas: "95-92-1" },
        { name: "Ethyl Acetate", cas: "141-78-6" }
      ],
      "Ethers": [
        { name: "Diglyme", cas: "111-96-6" },
        { name: "Diisopropyl Ether", cas: "108-20-3" },
        { name: "Methyl Tertiary Butyl Ether (MTBE)", cas: "1634-04-4" },
        { name: "Tetrahydrofuran (THF)", cas: "109-99-9" }
      ],
      "Halides": [
        { name: "Benzyl Chloride", cas: "100-44-7" },
        { name: "Isobutyl Bromide", cas: "78-77-3" },
        { name: "Methylene Chloride", cas: "75-09-2" },
        { name: "N-Propyl Bromide", cas: "106-94-5" },
        { name: "Para Tolune Sulfonyl Chloride (PTSC)", cas: "98-59-9" }
      ],
      "Hydrocarbons": [
        { name: "N-Heptane", cas: "142-82-5" },
        { name: "N-Hexane", cas: "110-54-3" }
      ],
      "Ketones": [
        { name: "Acetone", cas: "67-64-1" }
      ]
    }
  },
  "Stage-3: Specialty / Reactive": {
    icon: <Sparkles className="w-6 h-6" />,
    color: "orange",
    subcategories: {
      "Reactive Intermediates & Catalyst": [
        { name: "Dimethyl Sulfate (DMS)", cas: "77-78-1" },
        { name: "Phosphorous Oxychloride (POCL3)", cas: "10025-87-3" },
        { name: "Phosphorus Penta Chloride (PCL5)", cas: "10026-13-8" },
        { name: "Phosphorus Tri Chloride (PCL3)", cas: "7719-12-2" },
        { name: "Raney Nickel Catalyst", cas: "7440-02-0" },
        { name: "Thionyl Chloride (TCL)", cas: "7719-09-7" }
      ],
      "Quaternary Ammonium Salts/Phase Transfer Catalyst": [
        { name: "Benzyls Tributyl Ammonium Bromide (BTBAB)", cas: "25316-59-0" },
        { name: "Benzyls Tributyl Ammonium Chloride (BTRACL)", cas: "23616-79-7" },
        { name: "Benzyls Triethyl Ammonium Bromide (BTEAB)", cas: "5197-95-5" },
        { name: "Benzyls Trimethyl Ammonium Chloride (BTMAC)", cas: "56-93-9" },
        { name: "Benzyls Trimethyl Ammonium Bromide (BTMAB)", cas: "5350-41-4" },
        { name: "Benzyls Trimethyl Ammonium Chloride (BTMACL)", cas: "56-93-9" },
        { name: "Butyl Tributyl Ammonium Bromide (BTB-B)", cas: "10025-69-8" },
        { name: "Tetra Butyl Ammonium Bromide (TBAB)", cas: "1643-19-2" }
      ]
    }
  }
};

export function Products() {
  const [activeStage, setActiveStage] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSubcategories, setExpandedSubcategories] = useState<Set<string>>(new Set());
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Scroll to top when landing on /products
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleSubcategory = (key: string) => {
    const newExpanded = new Set(expandedSubcategories);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedSubcategories(newExpanded);
  };

  const toggleProductSelection = (productName: string, cas: string) => {
    const productKey = `${productName}|${cas}`;
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(productKey)) {
      newSelected.delete(productKey);
    } else {
      newSelected.add(productKey);
    }
    setSelectedProducts(newSelected);
  };

  const isProductSelected = (productName: string, cas: string) => {
    const productKey = `${productName}|${cas}`;
    return selectedProducts.has(productKey);
  };

  const removeProduct = (productKey: string) => {
    const newSelected = new Set(selectedProducts);
    newSelected.delete(productKey);
    setSelectedProducts(newSelected);
  };

  const clearSelection = () => {
    setSelectedProducts(new Set());
  };

  const sendInquiry = () => {
    try {
      const productList = Array.from(selectedProducts).map(key => {
        const [name, cas] = key.split('|');
        return `• ${name}${cas ? ` (CAS: ${cas})` : ''}`;
      }).join('\n');

      const subject = 'Product Inquiry - Ramshree Corporation';
      const body = `Dear Ramshree Team,

I would like to request a quote and further information for the following products:

${productList}

Please provide:
- Pricing details
- Available packing options
- COA and MSDS documentation
- Delivery timeline

Thank you.`;

      const mailtoLink = `mailto:ramshree.corp@rediffmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.open(mailtoLink, '_blank');
    } catch (error) {
      console.error('Error sending inquiry:', error);
      alert('Unable to open email client. Please contact us directly at ramshree.corp@rediffmail.com');
    }
  };

  // Filter logic
  const getFilteredData = () => {
    const filtered: typeof productData = {} as any;
    
    Object.entries(productData).forEach(([stage, stageData]) => {
      // Stage filter
      if (activeStage !== "All" && stage !== activeStage) return;
      
      const filteredSubcategories: any = {};
      
      Object.entries(stageData.subcategories).forEach(([subcat, products]) => {
        const filteredProducts = products.filter(p => 
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.cas.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        if (filteredProducts.length > 0) {
          filteredSubcategories[subcat] = filteredProducts;
        }
      });
      
      if (Object.keys(filteredSubcategories).length > 0) {
        filtered[stage] = {
          ...stageData,
          subcategories: filteredSubcategories
        };
      }
    });
    
    return filtered;
  };

  const filteredData = getFilteredData();
  
  // Count total products
  const getTotalProducts = (data: typeof productData) => {
    let count = 0;
    Object.values(data).forEach(stage => {
      Object.values(stage.subcategories).forEach(products => {
        count += products.length;
      });
    });
    return count;
  };

  const totalProducts = getTotalProducts(productData);
  const filteredProductsCount = getTotalProducts(filteredData);

  const stages = ["All", "Stage-1: Inorganic / Bulk Chemicals", "Stage-2: Organic Solvents & Intermediates", "Stage-3: Specialty / Reactive"];

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      slate: {
        bg: "bg-slate-50",
        border: "border-slate-200",
        text: "text-slate-700",
        icon: "text-slate-600",
        hover: "hover:bg-slate-100",
        badge: "bg-slate-100 text-slate-700"
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        icon: "text-blue-600",
        hover: "hover:bg-blue-100",
        badge: "bg-blue-100 text-blue-700"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-700",
        icon: "text-orange-600",
        hover: "hover:bg-orange-100",
        badge: "bg-orange-100 text-orange-700"
      }
    };
    return colors[color] || colors.slate;
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 pb-32">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Complete Product Portfolio</h1>
            <p className="text-blue-100 max-w-3xl text-lg md:text-xl opacity-90 leading-relaxed">
              {totalProducts}+ premium chemical products across 3 major stages and 26+ specialized categories. 
              All deliveries include COA, MSDS, and compliant labeling.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-700/20 to-transparent" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-[calc(var(--nav-height,5rem)-1px)] z-40 bg-white border-b border-slate-200 shadow-md">
        <div className="container mx-auto px-6 py-6">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by product name or CAS number..."
              className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-semibold">
                {filteredProductsCount} results
              </div>
            )}
          </div>

          {/* Stage Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {stages.map((stage) => {
              const isActive = activeStage === stage;
              const stageData = stage !== "All" ? productData[stage as keyof typeof productData] : null;
              const productCount = stage === "All" 
                ? totalProducts 
                : stageData ? getTotalProducts({ [stage]: stageData } as any) : 0;
              
              return (
                <button
                  key={stage}
                  onClick={() => setActiveStage(stage)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all border-2 ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/30"
                      : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  {stageData?.icon}
                  <span>{stage === "All" ? "All Products" : stage.split(": ")[1]}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-black ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    {productCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Display */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {Object.keys(filteredData).length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-32"
              >
                <Search className="w-20 h-20 text-slate-300 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-slate-400 mb-3">No products found</h3>
                <p className="text-slate-400 text-lg">Try adjusting your search or filters.</p>
              </motion.div>
            ) : (
              <div className="space-y-8">
                {Object.entries(filteredData).map(([stage, stageData]) => {
                  const colors = getColorClasses(stageData.color);
                  
                  return (
                    <motion.div
                      key={stage}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
                    >
                      {/* Stage Header */}
                      <div className={`${colors.bg} border-b ${colors.border} px-8 py-6`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-2xl ${colors.badge} flex items-center justify-center ${colors.icon}`}>
                              {stageData.icon}
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-slate-900">{stage.split(": ")[1] || stage}</h2>
                              <p className="text-sm text-slate-500 mt-1 font-medium">
                                {Object.keys(stageData.subcategories).length} subcategories • {getTotalProducts({ [stage]: stageData } as any)} products
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Subcategories */}
                      <div className="divide-y divide-slate-100">
                        {Object.entries(stageData.subcategories).map(([subcategory, products]) => {
                          const subcatKey = `${stage}-${subcategory}`;
                          const isExpanded = expandedSubcategories.has(subcatKey);
                          
                          return (
                            <div key={subcatKey}>
                              {/* Subcategory Header */}
                              <button
                                type="button"
                                onClick={() => toggleSubcategory(subcatKey)}
                                className="w-full px-6 sm:px-8 py-5 flex items-start gap-3 sm:gap-4 text-left justify-between hover:bg-slate-50 transition-colors group"
                              >
                                <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                                  <FlaskConical
                                    className={`w-5 h-5 shrink-0 mt-0.5 ${colors.icon} group-hover:scale-110 transition-transform`}
                                  />
                                  <h3 className="text-lg font-bold text-slate-800 min-w-0 flex-1 text-left leading-snug break-words">
                                    {subcategory}
                                  </h3>
                                  <span
                                    className={`shrink-0 self-start px-3 py-1 rounded-full text-xs font-black mt-0.5 ${colors.badge}`}
                                  >
                                    {products.length}
                                  </span>
                                </div>
                                <ChevronDown
                                  className={`w-5 h-5 shrink-0 text-slate-400 mt-1 transition-transform duration-300 ${
                                    isExpanded ? "rotate-180" : ""
                                  }`}
                                />
                              </button>

                              {/* Products Grid */}
                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-8 pb-6 pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                      {products.map((product, idx) => {
                                        const isSelected = isProductSelected(product.name, product.cas);
                                        
                                        return (
                                          <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                            onClick={() => toggleProductSelection(product.name, product.cas)}
                                            className={`bg-slate-50 rounded-2xl p-5 border-2 transition-all cursor-pointer relative ${
                                              isSelected 
                                                ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-200/50' 
                                                : 'border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50'
                                            }`}
                                          >
                                            {/* Selection indicator */}
                                            <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                              isSelected 
                                                ? 'bg-blue-600 border-blue-600' 
                                                : 'border-slate-300 bg-white'
                                            }`}>
                                              {isSelected && <Check className="w-4 h-4 text-white" />}
                                            </div>

                                            <h4 className={`font-bold mb-3 leading-tight pr-8 transition-colors ${
                                              isSelected ? 'text-blue-700' : 'text-slate-900'
                                            }`}>
                                              {product.name}
                                            </h4>
                                            {product.cas && (
                                              <div className="flex items-center gap-2">
                                                <span className="text-xs text-slate-500 font-semibold">CAS:</span>
                                                <span className="text-sm font-mono font-bold text-slate-700">
                                                  {product.cas}
                                                </span>
                                              </div>
                                            )}
                                          </motion.div>
                                        );
                                      })}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Floating Cart Button & Panel */}
      <AnimatePresence>
        {selectedProducts.size > 0 && (
          <>
            {/* Floating Cart Button */}
            {!showCart && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => setShowCart(true)}
                className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-5 rounded-full shadow-2xl shadow-blue-600/40 hover:bg-blue-700 transition-all hover:scale-110"
              >
                <div className="relative">
                  <ShoppingCart className="w-7 h-7" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-black rounded-full flex items-center justify-center">
                    {selectedProducts.size}
                  </span>
                </div>
              </motion.button>
            )}

            {/* Cart Panel */}
            {showCart && (
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-white shadow-2xl z-50 flex flex-col"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Selected Products</h2>
                    <p className="text-blue-100 text-sm">{selectedProducts.size} items ready for inquiry</p>
                  </div>
                  <button
                    onClick={() => setShowCart(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Product List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-3">
                  {Array.from(selectedProducts).map((productKey) => {
                    const [name, cas] = productKey.split('|');
                    return (
                      <motion.div
                        key={productKey}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-slate-50 rounded-xl p-4 flex items-start justify-between gap-3 border border-slate-200"
                      >
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-1">{name}</h4>
                          {cas && (
                            <p className="text-xs text-slate-500">
                              <span className="font-semibold">CAS:</span> <span className="font-mono">{cas}</span>
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeProduct(productKey)}
                          className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-3">
                  <button
                    onClick={sendInquiry}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-600/30 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Send Inquiry
                  </button>
                  <button
                    onClick={clearSelection}
                    className="w-full bg-slate-200 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-300 transition-all"
                  >
                    Clear All
                  </button>
                </div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 border-t border-blue-700">
        <div className="container mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-[3rem] p-12 border border-white/20">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-grow text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Chemical Solution?</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Can't find the specific chemical for your synthesis process? Our consultancy team specializes 
                  in sourcing rare intermediates and specialty molecules globally with complete documentation.
                </p>
              </div>
              <Link to="/contact" className="px-10 py-5 bg-white text-blue-900 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-2xl shadow-black/20 shrink-0 text-lg">
                Speak to Consultant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}