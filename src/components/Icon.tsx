import countryFlagIcon from 'country-flag-icons/react/3x2';
import { FaGoogle as Google } from 'react-icons/fa';
import { FaLinkedin as LinkedIn } from 'react-icons/fa';
import { FaGithub as Github } from 'react-icons/fa';
import { FcLinux as Linux } from 'react-icons/fc';
import { FaMobile as Mobile } from 'react-icons/fa';
import { FaDesktop as Desktop } from 'react-icons/fa';
import { FaChrome as Chrome } from 'react-icons/fa';
import { FaSafari as Safari } from 'react-icons/fa';
import { FaFirefox as Firefox } from 'react-icons/fa';
import { FaOpera as Opera } from 'react-icons/fa';
import { FaEdge as Edge } from 'react-icons/fa';
import { FaWindows as Windows } from 'react-icons/fa';
import { FcAndroidOs as Android } from 'react-icons/fc';
import { FaApple as Apple } from 'react-icons/fa';
import { FaFacebook as Facebook } from 'react-icons/fa';
import { FaTwitter as Twitter } from 'react-icons/fa';
import { FaInstagram as Instagram } from 'react-icons/fa';
import { MdOutlineLink as Self } from "react-icons/md";


const icons = {
    'google': Google,
    'linkedin': LinkedIn,
    'github': Github,
    'linux': Linux,
    'mobile': Mobile,
    'desktop': Desktop,
    'chrome': Chrome,
    'safari': Safari,
    'firefox': Firefox,
    'opera': Opera,
    'edge': Edge,
    'windows': Windows,
    'android': Android,
    'apple': Apple,
    'mac os': Apple,
    'ios': Apple,
    'fedora': Linux,
    'facebook': Facebook,
    'twitter': Twitter,
    'instagram': Instagram,
    'self': Self,
    'mobile safari': Safari
};

export function Icon({ code }: { code: string | undefined | null }) {

    if (!code) return


    // coutry code are 2 digit 
    if (code.length == 2) {

        // @ts-ignore
        const FlagIcon = countryFlagIcon[code.toUpperCase()]
        return FlagIcon
    }

    else {
        return icons[code as keyof typeof icons]
    }


}
