import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { BorderCountriesList } from '../borderCountriesList';
import { CloseButton } from './SwipableEdgeDrawlerStyled';

import { MdClose } from 'react-icons/md';

const TemporaryDrawer = ({ borderCountries, open, onClose }) => {
  return (
    <div>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: '20vw' }} role="presentation">
          <Box sx={{ p: 2 }}>
            <div>
              <h2
                style={{
                  padding: 10,
                }}
              >
                {`${borderCountries.commonName} border countries`}
              </h2>
              <CloseButton onClick={onClose}>
                <MdClose style={{ color: 'red' }} />
              </CloseButton>
            </div>

            <Divider />
            <BorderCountriesList
              onClose={onClose}
              borderCountries={borderCountries.borders}
            />
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};
export default TemporaryDrawer;
