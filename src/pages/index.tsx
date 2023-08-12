
import Banner from '@/components/Banner'
import Products from '@/components/Products'
import { Inter } from 'next/font/google'
import { ProductProps } from '../../type'

const inter = Inter({ subsets: ['latin'] })

interface props{
  productData: ProductProps;
}

export default function Home({productData}:props) {
  return (
    <main>

      <div className='max-w-screen-2xl mx-auto bg-gray-300'>
        <Banner/>
        <div className='relative z-20 mb-25 md:-mt020 lgl:-mt-32 xl:-mt-60'>
        <Products productData={productData}/>
        </div>
      </div>
    </main>
  )
}

// SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};