import {
  Avatar,
  Divider,
  Drawer,
  ListItemButton,
  ListItemIcon,
  useTheme,
  Icon,
  ListItemText,
  List,
  useMediaQuery
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDrawerContext } from '../../contexts'

interface IdrawerProps {
  children: React.ReactNode
}
export const MenuLateral: React.FC<IdrawerProps> = ({ children }) => {
  const theme = useTheme()
  const smdown = useMediaQuery(theme.breakpoints.down('sm'))
  const{isDrawerOpen, toggleDrawerOpen} = useDrawerContext()
  return (
    <>
      <Drawer open ={isDrawerOpen} variant={smdown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box
          width={theme.spacing(28)}
          height='100%'
          display='flex'
          flexDirection='column'
        >
          <Box
            width='100%'
            height={theme.spacing(20)}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component='nav'>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                  <ListItemText primary='Pagina Inicial' />
                </ListItemIcon>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={smdown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
