export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ultimate Guide to Philadelphia Travel Tips",
    excerpt: "Discover the best ways to navigate the City of Brotherly Love, from hidden historical gems to the best cheesesteak spots.",
    content: "Philadelphia, affectionately known as the City of Brotherly Love, is a historic city full of charm and culture. Navigating this metropolis is easy when you rent a car. You can easily drive between reading terminal market, the liberty bell, and more. Make sure you plan your route in advance and be aware of parking options... \n\n" +
             "We will share our favorite spots to grab a cheesesteak, our top recommendations for museums to visit, and much more. Enjoy the ride with Philly Car Rental!",
    category: "Travel Guide",
    date: "May 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1542204172-55bb3f647748?q=80&w=2942&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Car Rental Advice: How to Choose the Right Vehicle",
    excerpt: "Should you go for an economy sedan or a luxury SUV? Our experts weigh in on choosing the perfect car for your Philly trip.",
    content: "Selecting the ideal vehicle for your Philadelphia adventure depends on several factors. Will you be exploring the narrow, historic streets of Old City, or are you planning a smooth cruise along Kelly Drive? \n\n" +
             "For solo travelers or couples, an economy car might be the perfect compact choice for parking in tight spaces. However, if you are bringing the whole family, you might need a spacious SUV with plenty of trunk space. And for those looking to make a statement, you can't go wrong with our luxury fleet, including the legendary Polaris Slingshot. Let us guide you through the process of choosing your dream ride.",
    category: "Expert Advice",
    date: "May 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Hidden Gems in Philadelphia You Can Only Reach by Car",
    excerpt: "Venture beyond Center City and explore the beautiful parks and historic neighborhoods surrounding metropolitan Philadelphia.",
    content: "While Philadelphia's Center City is incredibly walkable, there is so much more to discover just outside the main hub. Having a rental car opens up a world of possibilities for exploration. \n\n" +
             "Take a drive out to Fairmount Park, one of the largest urban park systems in the country. Explore the historic estates, beautiful gardens, and scenic trails. Or venture further out to the countryside and discover charming towns, local wineries, and breathtaking landscapes. Your Philly adventure awaits, and we have the perfect car to get you there.",
    category: "Road Trips",
    date: "May 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1571210862729-ef8a653fd048?q=80&w=2940&auto=format&fit=crop"
  }
];
