import Link from 'next/link';

export default function Labs() {
    return (
        <div id="labs">
            <h1>Labs Table of Contents</h1>
            <ul>
                <li><Link href="/Labs/Lab1">Lab 1 : HTML basics</Link></li>
                <li><Link href="/Labs/Lab2">Lab 2 : CSS basics</Link></li>
                <li><Link href="/Labs/Lab3">Lab 3 : JavaScript basics</Link></li>
            </ul>
            <a id="wd-github" href="https://github.com/sandratangg/kambaz-next-js">View on GitHub</a>
        </div>
    );
}
