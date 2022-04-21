import React from 'react'

export default function ButtonLoader(props: any) {
  return (
    <svg className=' animate-spin'  width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" fill="white"/>
        <path d="M22 12C22 6.47715 17.5228 2 12 2V5C15.866 5 19 8.13401 19 12H22Z" fill="white"/>
    </svg>
  )
} 