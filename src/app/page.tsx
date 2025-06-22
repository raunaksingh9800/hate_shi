'use client';

import EmojiScroller from '@/app/components/CoupleEmojiFloat'



export default function Home() {
  return (
 <div className="relative w-screen h-screen bg-[#FFD8D8] overflow-hidden flex flex-col justify-between">
      <div className='mt-8'>
      <EmojiScroller
      emojis={['skull.png', 'crying.png', 'love-always-wins.png', 'pro.png', 'smiling.png', 'crying.png', 'skull.png', 'pro.png', 'love-always-wins.png',]}
        speed="normal"
        direction="left"
        fontSize={50}
      />

      </div>

      <div className="text-center mt-auto mb-auto">
        <h1 className="text-4xl font-medium text-[#ED3500]">I Hate You <b>Shalini</b> </h1>
        <h3 className=' text-black/40 font-serif mt-4 text-xl mb-4'>But Your the Best</h3>
        <a href="/best" className=' underline font-serif text-black/40 text-sm '>Know why Your the best</a>
      </div>


      <div className=' absolute bottom-8 '>
      <EmojiScroller
      emojis={['smiling.png', 'crying.png', 'skull.png', 'pro.png', 'love-always-wins.png', 'crying.png', 'skull.png',  'skull.png', 'crying.png', 'love-always-wins.png', 'pro.png', 'smiling.png', 'love-always-wins.png']}
        speed="normal"
        direction="right"
        fontSize={50}
      />

      </div>
    </div>
  );
}

