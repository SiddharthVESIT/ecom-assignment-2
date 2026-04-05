export const revenueStats = {
  monthlyGMV: "₹120Cr",
  conversionRate: "1.2%",
  averageOrderValue: "₹2.5Cr",
  monthlyOrders: 48, // Properties sold
  returningCustomers: "18%", // Investors
  customerAcquisitionCost: "₹15,000"
};

export const revenueStreams = [
  {
    id: 1,
    title: "Brokerage Commissions",
    percentage: 50,
    description: "Our primary revenue stream — earning 1% to 2.5% commission on every property sold through our platform, driven by our extensive broker network.",
    stats: "₹1.8Cr/month",
    icon: "HandCoins"
  },
  {
    id: 2,
    title: "Elevate Originals Sales",
    percentage: 30,
    description: "Direct sales of properties developed or exclusively owned by Elevate Estates, yielding high profit margins.",
    stats: "₹1.1Cr/month",
    icon: "Building2"
  },
  {
    id: "ads", // important for rendering
    title: "Ad Network & Placements",
    percentage: 15,
    description: "Premium property placements and targeted advertisements on Instagram and our platform by developers to reach HNI buyers.",
    stats: "₹55L/month",
    icon: "Megaphone"
  },
  {
    id: 4,
    title: "Property Management",
    percentage: 5,
    description: "Recurring revenue from managing rental properties, including maintenance, tenant screening, and rent collection.",
    stats: "₹18L/month",
    icon: "Key"
  }
];

export const monthlyRevenue = [
  { month: "Sep", revenue: 210 },
  { month: "Oct", revenue: 280 },
  { month: "Nov", revenue: 320 },
  { month: "Dec", revenue: 450 }, // Festive season bump
  { month: "Jan", revenue: 250 },
  { month: "Feb", revenue: 310 },
  { month: "Mar", revenue: 363 }
];
