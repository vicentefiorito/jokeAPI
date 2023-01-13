import React, { use } from 'react';
import {useRouter} from 'next/router'

export default function About({res}) {
    console.log(res);
  return (
    <div>API called</div>
  )
}

export async function getServerSideProps() {
    const req = await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json');
    const data = await req.json()

    return {
       props: {res:data}
    }
}


