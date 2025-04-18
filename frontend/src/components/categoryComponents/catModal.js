import { Box, Modal, Sheet, Typography } from '@mui/joy'
import React from 'react'
import { GeneralState } from '../../contexts/GeneralContext'

const CatModal = () => {
    const { userPresence, setUserPresence, catModal, setCatModal } = GeneralState()

    return (
        <Box>
            <Modal sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} open={catModal} onClose={() => setCatModal(false)}>
                <Sheet>
                    <Typography>
                        دسته بندی کالا ها
                    </Typography>
                </Sheet>
            </Modal>
        </Box>
    )
}

export default CatModal