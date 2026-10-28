'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ShoppingBasket, UserRound, LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { getProducts, taka, fallbackProducts } from '@/lib/products';
import toast from 'react-hot-toast';
export function Navbar(){
 const path=usePathname(); const router=useRouter(); const [open,setOpen]=useState(false); const [items,setItems]=useState(fallbackProducts); const {data:session,isPending}=authClient.useSession();
 useEffect(()=>{getProducts().then(setItems)},[]);
 const nav=[{name:'সব পণ্য',href:'/#সব-পণ্য'},{name:'চাল',href:'/category/chal'},{name:'সবজি',href:'/category/sobji'},{name:'মসলা',href:'/category/moshla'},{name:'মাছ-মাংস',href:'/category/mach-mangsho'}];
 async function logout(){await authClient.signOut();toast.success('সফলভাবে সাইন আউট হয়েছে');router.push('/');router.refresh()}
 return <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#e4ece4]">
 <div className="container-main flex min-h-[76px] items-center justify-between gap-4 py-3">
  <Link href="/" className="flex items-center gap-3 shrink-0"><img src="/logo-icon.png" className="h-11 w-11 object-contain" alt="বাজার দর"/><span><b className="block text-xl font-extrabold tracking-tight">বাজার দর</b><small className="text-xs text-[#718176]">{new Date().toLocaleDateString('bn-BD',{weekday:'long',day:'numeric',month:'long'})}</small></span></Link>
  <nav className="hidden lg:flex items-center gap-1">{nav.map(n=><Link key={n.href} href={n.href} className={`rounded-full px-3 py-2 text-sm font-bold transition ${path===n.href||path.startsWith(n.href.split('#')[0]+'/')?'bg-[#e8f6eb] text-[#147a40]':'text-[#536359] hover:bg-[#f2f7f1]'}`}>{n.name}</Link>)}</nav>
  <div className="hidden sm:flex items-center gap-2">{session?.user?<><Link href="/profile" className="btn-outline !px-3"><UserRound size={17}/><span className="max-w-24 truncate">{session.user.name||'প্রোফাইল'}</span></Link><button onClick={logout} className="btn-primary !px-4"><LogOut size={16}/> বের হন</button></>:<><Link href="/signin" className="px-3 py-2 text-sm font-bold">সাইন ইন</Link><Link href="/signup" className="btn-primary !px-5 !py-2.5 text-sm">সাইন আপ</Link></>}</div>
  <button className="lg:hidden rounded-xl border p-2" onClick={()=>setOpen(!open)} aria-label="মেনু">{open?<X/>:<Menu/>}</button>
 </div>
 {open&&<div className="container-main lg:hidden pb-4"><div className="grid grid-cols-2 gap-2">{nav.map(n=><Link onClick={()=>setOpen(false)} key={n.href} href={n.href} className="rounded-xl bg-[#f5f8f3] p-3 text-sm font-bold">{n.name}</Link>)}{session?.user?<><Link href="/profile" className="rounded-xl p-3 bg-[#e8f6eb]">প্রোফাইল</Link><button onClick={logout} className="rounded-xl p-3 bg-[#fff0ee] text-left">সাইন আউট</button></>:<><Link href="/signin" className="rounded-xl p-3 border text-center">সাইন ইন</Link><Link href="/signup" className="rounded-xl p-3 bg-[#16834a] text-white text-center">সাইন আপ</Link></>}</div></div>}
 <div className="overflow-hidden border-t border-[#eef2eb] bg-[#f7fbf5] py-2"><div className="ticker-track">{[...items,...items].map((p,i)=><span key={`${p.id}-${i}`} className="mx-5 flex items-center gap-2 whitespace-nowrap text-xs"><b>{p.emoji} {p.name}</b><span className="text-[#647269]">{taka(p.price)}</span><b className={p.change>0?'text-green-700':p.change<0?'text-red-600':'text-gray-500'}>{p.change>0?'▲':p.change<0?'▼':'—'} {Math.abs(p.change).toLocaleString('bn-BD')}%</b></span>)}</div></div>
 </header>
}
