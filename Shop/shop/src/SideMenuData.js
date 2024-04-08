import { IoIosPaper} from "@react-icons/all-files/io/IoIosPaper";
import { IoMdPeople } from "@react-icons/all-files/io/IoMdPeople";
import { AiFillHome, AiOutlineClose } from '@react-icons/all-files/ai/AiFillHome';
import { FaEnvelopeOpenText } from "@react-icons/all-files/fa/FaEnvelopeOpenText";
import { FaCartPlus } from "@react-icons/all-files/fa/FaCartPlus";

export const SideMenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/',
        icon: <IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/',
        icon: <FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoMdPeople/>,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/',
        icon: <FaEnvelopeOpenText/>,
        cName: 'nav-text'
    }
]