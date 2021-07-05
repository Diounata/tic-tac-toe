import Head from 'next/head';

type TitleProps = { title: string };

export default function TitlePage({ title }: TitleProps) {
    return (
        <Head>
            <title>{title} | Tic-tac-toe</title>
        </Head>
    );
}
