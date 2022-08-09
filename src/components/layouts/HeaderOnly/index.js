import { Header } from '~/components/layouts/components';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="content">{children}</div>
        </div>
    );
}

export default HeaderOnly;
