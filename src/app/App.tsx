import './styles/index.scss';
import {Navbar} from "widgets/Navbar/Navbar";
import {AppRouter} from "./providers/router/AppRouter";
import {Footer} from "../widgets/Footer/Footer";
import {withStore} from "./providers/store";
import {useEffect} from "react";
import {useAppDispatch} from "../shared/lib/reduxHooks";
import {fetchUser} from "../features/fetchUser";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
            <Footer/>
        </div>
    );
}

export default withStore(<App/>);
