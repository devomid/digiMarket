import React from 'react'
import { GeneralState } from '../../contexts/GeneralContext'
import { Box, Modal, Sheet, Typography } from '@mui/joy'

const LoginModal = () => {
    const { userPresence, setUserPresence, loginModal, setLoginModal } = GeneralState()

    return (
        <Box>
            <Modal sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} open={loginModal} onClose={() => setLoginModal(false)}>
                <Sheet>
                    <Typography>
                        login
                    </Typography>
                </Sheet>
            </Modal>
        </Box>
    )
}

export default LoginModal