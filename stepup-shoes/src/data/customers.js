export const customers = [
  {
    id: "cust-001",
    name: "Arjun Mehta",
    email: "arjun.m@email.com",
    tier: "Gold",
    ltv: 18500,
    orders: 9,
    lastPurchase: "2025-03-10",
    joinDate: "2023-08-01",
    favoriteCategory: "Running"
  },
  {
    id: "cust-002",
    name: "Sneha Patil",
    email: "sneha.p@email.com",
    tier: "Gold",
    ltv: 22300,
    orders: 11,
    lastPurchase: "2025-03-18",
    joinDate: "2023-05-15",
    favoriteCategory: "Formal"
  },
  {
    id: "cust-003",
    name: "Rohan Sharma",
    email: "rohan.s@email.com",
    tier: "Silver",
    ltv: 8700,
    orders: 5,
    lastPurchase: "2025-02-22",
    joinDate: "2024-01-10",
    favoriteCategory: "Casual"
  },
  {
    id: "cust-004",
    name: "Priya Nair",
    email: "priya.n@email.com",
    tier: "Silver",
    ltv: 12400,
    orders: 6,
    lastPurchase: "2025-01-15",
    joinDate: "2023-11-20",
    favoriteCategory: "Running"
  },
  {
    id: "cust-005",
    name: "Vikram Joshi",
    email: "vikram.j@email.com",
    tier: "Bronze",
    ltv: 3200,
    orders: 2,
    lastPurchase: "2025-03-01",
    joinDate: "2024-09-05",
    favoriteCategory: "Sports"
  },
  {
    id: "cust-006",
    name: "Ananya Desai",
    email: "ananya.d@email.com",
    tier: "Bronze",
    ltv: 4500,
    orders: 3,
    lastPurchase: "2024-12-28",
    joinDate: "2024-06-18",
    favoriteCategory: "Casual"
  },
  {
    id: "cust-007",
    name: "Karthik Reddy",
    email: "karthik.r@email.com",
    tier: "Silver",
    ltv: 9800,
    orders: 4,
    lastPurchase: "2025-02-10",
    joinDate: "2024-03-22",
    favoriteCategory: "Sports"
  },
  {
    id: "cust-008",
    name: "Meera Iyer",
    email: "meera.i@email.com",
    tier: "Bronze",
    ltv: 2100,
    orders: 1,
    lastPurchase: "2025-01-30",
    joinDate: "2025-01-15",
    favoriteCategory: "Formal"
  }
];

export const tierBenefits = {
  Bronze: {
    color: "#CD7F32",
    minLTV: 0,
    maxLTV: 5000,
    benefits: [
      "Welcome email with first-order discount",
      "5% birthday discount",
      "Monthly newsletter with new arrivals",
      "Access to seasonal sales"
    ]
  },
  Silver: {
    color: "#C0C0C0",
    minLTV: 5000,
    maxLTV: 15000,
    benefits: [
      "Early access to sales (24h before public)",
      "10% loyalty discount on all orders",
      "Free standard shipping on orders above ₹2,000",
      "Priority customer support",
      "Exclusive Silver-only flash deals"
    ]
  },
  Gold: {
    color: "#FFD700",
    minLTV: 15000,
    maxLTV: Infinity,
    benefits: [
      "Exclusive access to limited edition drops",
      "Personal stylist chat support",
      "15% discount on all orders",
      "Free express shipping on every order",
      "Priority support with dedicated agent",
      "Birthday gift box with surprise items",
      "VIP event invitations"
    ]
  }
};
