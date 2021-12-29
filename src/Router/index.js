import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CheckList from '../Checklist';
import Colors from '../Colors'
import Dashboard from '../Dashboard';
import Header from '../Header';
function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}>
                <Route path="/colorsPage" element={<Colors/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                < Route path="/checkList" element={<CheckList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;