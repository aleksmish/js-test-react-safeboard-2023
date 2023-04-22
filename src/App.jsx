import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Spinner from './components/spinner/spinner.component'

const Navigation = lazy(() =>
    import('./routes/navigation/navigation.component')
)
const Home = lazy(() => import('./routes/home/home.component'))
const Users = lazy(() => import('./routes/users/users.component'))

function App() {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="users" element={<Users />} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default App
