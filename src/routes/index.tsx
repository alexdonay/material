import { Routes, Route, Navigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const {toggleDrawerOpen} = useDrawerContext();
  return (
    <Routes>
      <Route
        path='/pagina-inicial'
        element={<Button variant='contained' onClick={toggleDrawerOpen}>bozo</Button>}
      />
      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
    )
}
