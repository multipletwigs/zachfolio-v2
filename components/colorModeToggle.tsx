import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes';

// const ref = () => {
// 	return (
// 		<button aria-label="Toggle Color Mode" type="button"
//           className="invisible sm:visible flex items-center justify-center 
//            rounded-lg border-2 px-5 py-3 hover:bg-[#EAEDFF] transition-all duration-300 dark:hover:bg-black"
//           onClick={() => {
//             setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
//           }
//           }>
//           {
//             mounted && (
//               <div>
//                 {
//                   resolvedTheme === 'dark' ?
//                     <div className="flex gap-2">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
//                       </svg>
//                       Light Mode
//                     </div> : <div className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                       <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
//                     </svg>
//                       Dark Mode</div>
//                 }
//               </div>
//             )
//           }
//         </button>
// 	)
	
// }

const ColorModeToggle = () => {
	const [mounted, setMounted] = useState(false); 
	const { resolvedTheme, setTheme } = useTheme(); 

	useEffect(() => {
		setMounted(true); 
	})

  return (
		<>
		{mounted && 
		<div className="flex gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
	   	</svg>
			<Switch
      checked={resolvedTheme === 'dark'}
      onChange={() => resolvedTheme === 'dark' ? setTheme('light'): setTheme('dark')}
      className={`bg-gradient-to-r from-orange-200 to-red-400 relative inline-flex h-6 w-11 items-center rounded-full dark:from-indigo-800 dark:to-indigo-400`}
    	>
				<span className="sr-only">{
					resolvedTheme === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'
				}</span>
				<span
					className={`translate-x-1 dark:translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition`}
				/>
    	</Switch>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
		</div> }
		</>
  )
}

export default ColorModeToggle