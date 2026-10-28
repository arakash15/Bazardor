import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
export const metadata: Metadata = { title: 'বাজার দর | BazarDor', description: 'প্রয়োজনীয় পণ্যের দাম এক নজরে — বাজারদর জানুন, তুলনা করুন।' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="bn"><body><Navbar/><main>{children}</main><Footer/><Toaster position="top-right" toastOptions={{duration:3200,style:{borderRadius:'14px',fontFamily:'Arial, sans-serif'}}}/></body></html> }
