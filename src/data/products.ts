export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string; // contoh: "500g" atau "1 Ekor"
  imagePlaceholder: string; // warna latar untuk kotak gambar placeholder (misal: "bg-amber-100")
  spiciness: 1 | 2 | 3; // level pedas marinasi
  tags: string[]; // contoh: ["Paling Laris", "Bumbu Kuning", "Pedas Manis"]
}

export const MARINATED_FISH_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Nila Marinasi Bumbu Kuning",
    description: "Ikan Nila segar pilihan yang dimarinasi dengan kunyit asli, bawang putih, ketumbar, dan rempah alami khas Sunda. Siap goreng atau bakar.",
    price: 35000,
    weight: "500g (Isi 2-3 Ekor)",
    imagePlaceholder: "from-amber-200 to-orange-100",
    spiciness: 1,
    tags: ["Bestseller", "Bumbu Kuning"]
  },
  {
    id: "prod-2",
    name: "Lele Marinasi Pedas Gurih",
    description: "Ikan Lele bersih tanpa kepala yang dimarinasi dengan bumbu pedas meresap hingga ke dalam daging. Sangat gurih dan garing saat digoreng.",
    price: 28000,
    weight: "500g (Isi 4-5 Ekor)",
    imagePlaceholder: "from-red-200 to-orange-100",
    spiciness: 3,
    tags: ["Pedas", "Siap Goreng"]
  },
  {
    id: "prod-3",
    name: "Gurame Marinasi Saus Madu",
    description: "Ikan Gurame porsi besar dengan marinasi bumbu manis gurih madu dan bawang bombay. Cocok untuk hidangan spesial keluarga.",
    price: 55000,
    weight: "600g - 700g (Isi 1 Ekor)",
    imagePlaceholder: "from-yellow-200 to-amber-100",
    spiciness: 1,
    tags: ["Premium", "Manis Gurih"]
  },
  {
    id: "prod-4",
    name: "Patin Fillet Marinasi Kemangi",
    description: "Daging fillet ikan Patin tanpa duri yang dimarinasi dengan perasan jeruk nipis dan daun kemangi segar, menghasilkan aroma khas anti-amis.",
    price: 42000,
    weight: "400g (Fillet)",
    imagePlaceholder: "from-emerald-200 to-teal-100",
    spiciness: 2,
    tags: ["Bebas Duri", "Wangi Kemangi"]
  }
];
