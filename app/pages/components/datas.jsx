import img1 from '@/app/assets/images/Daco_4880640.png'
import img2 from '@/app/assets/images/Daco_4884463.png'
import img3 from '@/app/assets/images/NicePng_bank-png_2237554.png'
import img4 from '@/app/assets/images/pngwing.png'
import img5 from '@/app/assets/images/pngwing.com.png'

import { BsBasket, BsFillPhoneFill, BsFlower1, BsLaptop } from 'react-icons/bs'
import { MdWindow,} from 'react-icons/md'
import { FaPrint, FaTshirt } from 'react-icons/fa'
import { HiClock } from 'react-icons/hi'

export const data =[
        {
            name:"Earbuds",
            image:img1,
            price:"$230"
        },
        {
            name:"earnuds",
            image:img2,
            price:"$230"

        },{
            name:"airepuds",
            image:img3,
            price:"$230"

        },{
            name:"power bank ",
            image:img4,
            price:"$400"

        },{
            name:"power bank",
            image:img5,
            price:"$200"

        },{
            name:"earpods",
            image:img1,
            price:"$200"
        },
]

export const categories = [
    {
        name:"All",
        icon:<MdWindow />,
    },
    {
        name:"Clothes",
        icon:<FaTshirt />,
    },{
        name:"Phones",
        icon:<BsFillPhoneFill />
,
    },{
        name:"Laptops",
        icon:<BsLaptop />
        ,
    },
    {
        name:"Decorations",
        icon:<BsFlower1 />
        ,
    },{
        name:"Shoes",
        icon:<FaPrint/>
        ,
    },{
        name:"Accessories",
        icon:<HiClock />
        ,
    },{
        name:"Home appliance",
        icon:<BsBasket />
        ,
    },
]