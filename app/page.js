import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="flex flex-row gap-[100px]">
          <div className="flex flex-col">
          <h1 className="text-4xl font-bold">
            Angelina’s World 
          </h1>
          <p>To  the girl that stole my heart</p>
          </div>
          <Image
          className=" "
          src="/heart.png"
          alt="Next.js logo"
          width={150}
          height={60}
          priority
          />
        </div>

        <Image
          className=" "
          src="/three_images_compacted.png"
          alt="Next.js logo"
          width={600}
          height={76}
          priority
        />
        <h2 className="font-serif text-2xl">Her Favorite Things to Do</h2>
        <div className="flex gap-[25px]">
      
        </div>


        <div className="flex flex-row gap-[15px]">
        <div className="w-50">  
         <Image
          className=" "
          src="/picnic_image.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> 
          <div>
            <h2> <p className="underline font-serif">Picnics</p>
        </h2>
        <p>When I go down to UF
           we’re going to have a
           date near the water
           where you said you had 
           an amazing view.  We
           also need one more picnic
           in November or December
           because I know how much 
            you love them. </p>
          </div>
        </div>
         
         <div className="w-50">  
          <Image
          className=" "
          src="/beach_image.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          />
          <div>
            <h2> <p className="underline font-serif">Beach</p>
        </h2>
        <p>As much as I hate getting sandy,
           I also know you love the beach 
           because it’s your time to show 
           off that gorgeous body!!!!! I 
           know those aren’t the only reasons 
           but we’ll go for sure. </p>
          </div>
        </div>

        <div className="w-50">  
         <Image
          className=" "
          src="/escape_room_image.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> 
          <div>
            <h2> <p className="underline font-serif">Escape Room</p>
        </h2>
        <p>So I know you always do this
           with your family and it may
           not be your all time favorite
           things but we’re going to make
           it a couple tradition of going
           to an escape room every time we
           meet back up in WPB </p>
          </div>
        </div>
        </div>
       
         <Image
          className=" "
          src="/Loggergead.png"
          alt="Next.js logo"
          width={360}
          height={100}
          priority
        /> 
        
        <h1 className="underline font-serif  text-2xl">Fun Facts About this Beautiful Woman</h1>

        
        

        
      
        <div>
          <h2 className="underline">Favortie Vacation Spot</h2>
          <p>Bali...like I’ve committed this
             to memory ever since the last time 
             I forgot about it. The one thing 
             I do remember is the TikTok that 
             showed the cliffs and the stunning 
             beaches </p>
        </div>
        
        <div>
          <h2 className="underline">Favorite Colors</h2>
          <p>Fuck ass sage green and violet.
             You don’t know how many times 
             you’ve made me feel like I was 
             wrong and almost made me crash out.
              Regardless those headaches were 
              worth it because there’s no one 
              else I’d rather be with than you. </p>
        </div>
        <div>
          <h2 className="underline">Birthday</h2>
          <p>So on March 8th, 2026 I’ve been 
            thinking about what we’re going to 
            do. I can’t really surprise you like
             I did before (or can I?) We’ll see 
             though, I guess we’ll never know 
             - xoxo</p>
        </div>

        <Image
          className=" "
          src="/drawing.png"
          alt="Next.js logo"
          width={360}
          height={100}
          priority
        /> 

         <h1 className="underline font-serif  text-2xl">Favorite Memories</h1>
        
        <div className="flex flex-row">
         <div>
         <h2 className=" text-2xl">Gradbash</h2>
         <Image
          className=" "
          src="/Gradbash.png"
          alt="Next.js logo"
          width={360}
          height={100}
          priority
        /> 
         <p className="w-100">Definitely an unforgettable night where
            I truly felt connected with you. I’ll 
            cherish that long night and hold onto it</p>
         </div>
         
         <div>
          <h2 className=" text-2xl">Prom</h2>
          <Image
          className=" "
          src="/Prom.png"
          alt="Next.js logo"
          width={360}
          height={100}
          priority
          /> 
          <p className="w-100">We lowk had fun dancing on the floor 
            and I love the balcony memory where we 
            simply stood outside and chilled for a 
            bit conversing about...IDK what (I think
            I mentioned how beautiful it was and you 
            agreed) OH we talked about Judes for a 
            bit bc he was in front of us.</p>
         </div>
         </div>


         <Image
          className=" "
          src="/Collage.png"
          alt="Next.js logo"
          width={720}
          height={200}
          priority
          /> 
                 <div>
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/second_page">Second Page</Link>
          {/* No prefetching */}
        </div>
      </main>
    </div>
  );
}
