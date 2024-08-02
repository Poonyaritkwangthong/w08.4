import { Card } from '@/components/card';

export default function Bio() {
  return (
    <div>
        <div>
            <h1 className='text-center text-white text-5xl mt-[2rem]'>Cute Animal</h1>
        </div>
        <div className='flex justify-center gap-2 mt-[3rem]'>
            <Card
            Box1="bg-white w-[20rem] h-[18rem] mx-auto"
                animalname="Fat cat" classNameAnimal="text-pink-500 text-4xl  ml-[2rem]"
                image="https://i.redd.it/4o3yg3gb4wo91.jpg" classNameImg="w-[14rem] h-[10rem] mt-2 mx-auto"
                caption="This a fat cat" classNameP1="text-pink-500  mt-2 ml-[2rem]"
                description="Fat cat so cute" classNameP2="text-pink-500 ml-[2rem]"
                />
            <Card
            Box1="bg-white w-[20rem] h-[18rem] mx-auto"
                animalname="Fat raccoon" classNameAnimal="text-pink-500 text-4xl  ml-[2rem]"
                image="https://s-media-cache-ak0.pinimg.com/originals/12/d7/e4/12d7e4a1803609335efde3327d3a1de1.jpg" classNameImg="w-[14rem] h-[10rem] mt-2 mx-auto"
                caption="This a fat raccoon" classNameP1="text-pink-500  mt-2 ml-[2rem]"
                description="Fat raccoon so cute" classNameP2="text-pink-500 ml-[2rem]"
                />
            <Card
            Box1="bg-white w-[20rem] h-[18rem] mx-auto"
                animalname="Fat dog" classNameAnimal="text-pink-500 text-4xl  ml-[2rem]"
                image="https://s.abcnews.com/images/Entertainment/HT_vincent4_dog_ml_160413_16x9_1600.jpg" classNameImg="w-[14rem] h-[10rem] mt-2 mx-auto"
                caption="This a fat dog" classNameP1="text-pink-500  mt-2 ml-[2rem]"
                description="Fat dog so cute" classNameP2="text-pink-500 ml-[2rem]"
                />
            <Card
            Box1="bg-white w-[20rem] h-[18rem] mx-auto"
                animalname="Fat bee" classNameAnimal="text-pink-500 text-4xl  ml-[2rem]"
                image="https://i.redd.it/u985rl52o5n51.jpg" classNameImg="w-[14rem] h-[10rem] mt-2 mx-auto"
                caption="This a fat bee" classNameP1="text-pink-500  mt-2 ml-[2rem]"
                description="Fat bee so cute" classNameP2="text-pink-500 ml-[2rem]"
                />
            <Card
            Box1="bg-white w-[20rem] h-[18rem] mx-auto"
                animalname="Fat tamandua" classNameAnimal="text-pink-500 text-4xl  ml-[2rem]"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrGGiN-5Fvzxl0bi85ePb88aUyR3ls2ICKA&s" classNameImg="w-[14rem] h-[10rem] mt-2 mx-auto"
                caption="This a tamandua dog" classNameP1="text-pink-500  mt-2 ml-[2rem]"
                description="Fat tamandua so cute" classNameP2="text-pink-500 ml-[2rem]"
                />
            <Card
            Box1="bg-white w-[20rem] h-[18rem] mx-auto"
                animalname="Fat rat" classNameAnimal="text-pink-500 text-4xl  ml-[2rem]"
                image="https://images.ctfassets.net/pjshm78m9jt4/247384_header/4465b4dd108d13ac4175075d3e2709f2/importedImage247384_header?fm=jpg&fit=fill&w=1600&q=80" classNameImg="w-[14rem] h-[10rem] mt-2 mx-auto"
                caption="This a fat rat" classNameP1="text-pink-500  mt-2 ml-[2rem]"
                description="Fat rat so cute" classNameP2="text-pink-500 ml-[2rem]"
                />
        </div>
    </div>
  )
}
