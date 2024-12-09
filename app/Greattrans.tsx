//alt det, der har en grøn tekst foran må ikke fjernes ellers gør hvad du vil fpr at gøre den flot
import { useRouter } from 'expo-router';

export default function Greattrans() {
    const router = useRouter(); //MÅ IKKE FJERNES
      const timer = setTimeout(() => {//MÅ IKKE FJERNES
        router.push('/FrontPage'); //MÅ IKKE FJERNES
      }, 3000);//MÅ IKKE FJERNES
      return () => clearTimeout(timer);//MÅ IKKE FJERNES
    //skriv her fra:

    }