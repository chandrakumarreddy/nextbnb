import dynamic from 'next/dynamic';
import retry from '@utils/retry';

export default function Dynamic(fn, ...args) {
    return dynamic(retry(fn), ...args);
}
