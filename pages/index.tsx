import filenamify from 'filenamify/browser';
import type {NextPage} from 'next';

const Home: NextPage = () => {
    return (
        <div>{filenamify('Foo:\\\\Bar')}</div>
    );
};

export default Home;
