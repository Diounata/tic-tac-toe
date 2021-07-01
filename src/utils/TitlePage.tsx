import Head from 'next/head';

type TitleProps = { title: string };

export default function TitlePage({ title }: TitleProps) {
    return (
        <Head>
            <title>Tic-tac-toe | {title}</title>
        </Head>
    );
}
