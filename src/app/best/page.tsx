'use client';

import EmojiScroller from '@/app/components/CoupleEmojiFloat'



export default function Home() {
  return (
 <div className="relative w-screen h-screen bg-[#FFD8D8] overflow-hidden flex flex-col justify-between">
      <div className='mt-8'>
      <EmojiScroller
      emojis={['skull.png', 'crying.png', 'love-always-wins.png', 'pro.png', 'smiling.png']}
        speed="normal"
        direction="right"
        fontSize={50}
      />

      </div>

      <div className=" mt-auto mb-auto">
       
        <h3 className=' text-black/40 font-serif mt-4 text-xl mb-4 px-6'>
Discover Why You're the Best
Reach out to Raunak Singh for personalized guidance.
<br /><br />
+91 74839 01655
<br /><br />
He’ll walk you through the entire process with clarity and support.
<a href="https://wa.me/917483901655" className='font-semibold flex flex-row gap-2 mt-4 items-center'> <img       style={{
        height: 20,
        width: 20,
        objectFit: "contain",
      }}
      className=' opacity-40'
      loading="lazy" src="external-link.png" alt="" /> Open Whatsapp</a></h3>
       

       
      </div>


      <div className='absolute bottom-8'>
      <EmojiScroller
      emojis={['smiling.png', 'crying.png', 'skull.png', 'pro.png', 'love-always-wins.png', 'crying.png', 'skull.png',  'skull.png', 'crying.png', 'love-always-wins.png', 'pro.png', 'smiling.png', 'love-always-wins.png']}
        speed="normal"
        direction="left"
        fontSize={50}
      />

      </div>
    </div>
  );
}

