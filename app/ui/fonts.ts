import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

// Lusitana 是教程里用于标题的衬线字体
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});