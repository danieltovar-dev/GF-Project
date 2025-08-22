import Image from "next/image";
import Link from "next/link";
import MyForm from "../components/myform";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
       <nav>
          {/* Prefetched when the link is hovered or enters the viewport */}
          <Link href="/">Go to First Page</Link>
        </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="flex flex-row gap-[100px]">
          <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold">
            More Memories 
          </h1>
          <p className="flex flex w-100">I think about you every night and day even when I’m here 
             at Providence: don’t ever think I’m not reminiscing about
             us because it takes up a good portion of my mind </p>
          </div>
        </div>

        <Image
          className=" "
          src="/dec16th.png"
          alt="Next.js logo"
          width={600}
          height={76}
          priority
        />
        <h2 className="font-serif text-2xl">December 16th, 2024</h2>
        <div className="flex gap-[25px]">
      
        </div>
        <p>

         The night I asked you out, I remember thinking to myself that I know what I’m getting into; I knew we were gonna be far from each other, I knew that the distance would cause some arguments, and above all I knew we were going to miss each other a lot but at the end of the day I have faith in us working out. 
         I vow to be aware of my surroundings so that you don’t feel uncomfortable anymore, because that’s the last feeling I want you to have, especially when we’re so far. I’ll make sure to maintain daily communication and put effort into the relationship so that it doesn’t start fading. This may sound like obvious things but it feels good to type it out for you and I kind of needed to release some of these emotions in one way or another. As you head out to go bowling, enjoy the night and never forget that I’ll always be rooting for you from the sidelines. I love you.
        </p>

        <div className="flex flex-row gap-[15px]"></div>


        <div>
         <Image
          className=" "
          src="/Jan_first.png"
          alt="Next.js logo"
          width={2000}
          height={400}
          priority
        /> 
        </div>
       <p>I know you remember the night we spent together for New Years: drinks, fireworks, kisses, drunken kisses, and meeting Luis’ family. The highlight of the night for me was when we got into William’s car drunk and he was playing “End of Beginning” and we were just screaming from the top of our lungs the lyrics. I felt so connected with you and I miss that moment. 
        </p>
         
        <p>Valentine’s day wasn’t the best one that night but we lowk did make the best of it. I remember you coming home late from that arduous ass shift and we were thinking that the day was ruined but I think I still went to see you or you came to see me (I might be wrong so don’t kill me). But what I do remember was that I was at Angel’s house and I was busy checking your location and when I saw you got home, we called, I visited you and we sat on the back of my car conversing for a while. This year, I’ll make sure I get the chance to see you again, that’s a promise. </p>

        <h1 className="underline font-serif  text-2xl">To the One and Only</h1>
        <h2 className="text-center">Pop Quiz: Describe the memory each pic belongs to and tell me your favorite thing about it</h2>
        
        

        
      
        
          
        
        <div className="flex flex-row gap-[20px]">
        <Image
          className=" "
          src="/Italian_restaurant.png"
          alt="Next.js logo"
          width={360}
          height={100}
          priority
        /> 
        <Image
          className=" "
          src="/Outback_feeding.png"
          alt="Next.js logo"
          width={360}
          height={100}
          priority
        /> 
        <Image
          className=" "
          src="/Stuck_under_bridge.png"
          alt="Next.js logo"
          width={360}
          height={100}
          priority
        /> 
        </div>


        <MyForm></MyForm>
      </main>
    </div>
  );
}

