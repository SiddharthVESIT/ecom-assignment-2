export const customers = [
  {
    id: "usr-001",
    name: "Arjun Mehta",
    email: "arjun.m@broker.com",
    role: "Broker",
    tier: "Gold", // Gold Broker
    ltv: 250000000, // Total Sales Volume 25Cr
    orders: 9, // Properties Sold
    lastPurchase: "2025-03-10",
    joinDate: "2022-08-01",
    favoriteCategory: "Villas",
    points: 1250 // Earned via reviews/photos
  },
  {
    id: "usr-002",
    name: "Sneha Patil",
    email: "sneha.p@investor.com",
    role: "Buyer",
    tier: "Silver", // Premium Buyer
    ltv: 85000000, 
    orders: 2, 
    lastPurchase: "2025-01-18",
    joinDate: "2023-05-15",
    favoriteCategory: "Apartments",
    points: 300
  },
  {
    id: "usr-003",
    name: "Rohan Sharma",
    email: "rohan.s@broker.com",
    role: "Broker",
    tier: "Silver", 
    ltv: 80000000, 
    orders: 5, 
    lastPurchase: "2025-02-22",
    joinDate: "2024-01-10",
    favoriteCategory: "Apartments",
    points: 450
  },
  {
    id: "usr-004",
    name: "Priya Nair",
    email: "priya.n@email.com",
    role: "Buyer",
    tier: "Bronze", 
    ltv: 0, 
    orders: 0, // Lead
    lastPurchase: "-",
    joinDate: "2024-11-20",
    favoriteCategory: "Villas",
    points: 50
  },
  {
    id: "usr-005",
    name: "Vikram Joshi",
    email: "vikram.j@broker.com",
    role: "Broker",
    tier: "Bronze",
    ltv: 12000000, 
    orders: 1, 
    lastPurchase: "2024-09-01",
    joinDate: "2024-08-05",
    favoriteCategory: "Commercial",
    points: 100
  },
  {
    id: "usr-006",
    name: "Ananya Desai",
    email: "ananya.d@email.com",
    role: "Buyer",
    tier: "Bronze",
    ltv: 7500000,
    orders: 1,
    lastPurchase: "2024-12-28",
    joinDate: "2024-06-18",
    favoriteCategory: "Plots",
    points: 200
  },
  {
    id: "usr-007",
    name: "Karthik Reddy",
    email: "karthik.r@broker.com",
    role: "Broker",
    tier: "Gold", 
    ltv: 350000000, 
    orders: 14, 
    lastPurchase: "2025-02-10",
    joinDate: "2021-03-22",
    favoriteCategory: "Commercial",
    points: 2100
  },
  {
    id: "usr-008",
    name: "Meera Iyer",
    email: "meera.i@email.com",
    role: "Buyer",
    tier: "Silver", 
    ltv: 45000000, 
    orders: 1, 
    lastPurchase: "2025-01-30",
    joinDate: "2025-01-15",
    favoriteCategory: "Apartments",
    points: 500
  }
];

export const tierBenefits = {
  Bronze: {
    color: "#CD7F32",
    minLTV: 0,
    maxLTV: 50000000, // 5 Cr
    benefits: [
      "Access to basic property listings",
      "Standard Broker Commission (1%)",
      "Earn 10 points per property review/photo upload",
      "Automated WhatsApp lead alerts"
    ]
  },
  Silver: {
    color: "#C0C0C0",
    minLTV: 50000000,
    maxLTV: 150000000, // 15 Cr
    benefits: [
      "Early access to New Launches (24h before public)",
      "Increased Broker Commission (1.5%)",
      "Earn 20 points per property review/photo upload",
      "Dedicated relationship manager",
      "Priority listing for own properties"
    ]
  },
  Gold: {
    color: "#FFD700",
    minLTV: 150000000,
    maxLTV: Infinity,
    benefits: [
      "Exclusive access to HNI 'Elevate Originals'",
      "Maximum Broker Commission (2.5% + Volume Bonus)",
      "Earn 50 points per property review/photo upload",
      "Free premium advertising credits",
      "Priority API access for CRM integration",
      "Invitations to VIP Developer networking events"
    ]
  }
};
