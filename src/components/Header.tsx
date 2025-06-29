'use client';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';
  const changeLanguage = (lng: string) => {
    console.log('pathname', pathname)
    console.log('lng', lng)
    const newPath = pathname.replace(`/${currentLocale}`, `/${lng}`);
    router.push(newPath);
  };

  return (
    <header className="fixed w-full z-1 top-0 bg-[#d4d4d452] p-4">
      <nav className="flex  justify-between items-center  gap-2 text-black mx-auto">
        <p className="font-sans text-4xl font-bold text-white">RAY SPOT</p>
        <div>
          <p className='font-bold inline'>lang: </p>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="border px-2 py-1 rounded text-black"
          >
            <option value="en">en</option>
            <option value="fr">fr</option>
          </select></div>
      </nav>
    </header>
  );
}