import {Route,Routes} from 'react-router-dom'
import {Layout} from '../pages/layout/Layout'

export const AppRoutes = () => {
    return (
        <>
            <Routes >
                <Route path='/' element={<Layout />} />
            </Routes>
        </>
    )
}
