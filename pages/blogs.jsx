import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {useTranslations} from 'next-intl';
import BlogListPage from "../components/BlogListPage";
import fs from 'fs';
import path from "path";
import QrcnHead from "../components/QrcnHead";

export async function getServerSideProps({locale}) {
    const blogsDirectory = path.join(process.cwd(), 'data/blogs');
    const filenames = fs.readdirSync(blogsDirectory);
    const blogs = filenames
        .filter(name => name.endsWith('.json'))
        .map((filename) => {
            const filePath = path.join(blogsDirectory, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(fileContents);
        });
    blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default,
            blogs: blogs
        },
    };
}

export default function Blogs({blogs}) {
    const t = useTranslations('contact');
    return (
        <>
            <QrcnHead title={'Blogs | QrCentraal'}/>
            <Navbar/>
            <BlogListPage blogPosts={blogs}/>
            <Footer/>
        </>
    );
}
