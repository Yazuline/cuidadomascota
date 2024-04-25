import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";

import ClientItem from "./items/ClientItem";
import ReservaItem from "./items/ReservaItem";
import CuidadorItem from "./items/CuidadorItem";
import ReportesItem from "./items/ReporteItem";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function UsersRol() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 290,
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab icon={<FaUser />} label="Clientes" {...a11yProps(0)} />
        <Tab icon={<FaUser />} label="Cuidadores" {...a11yProps(1)} />
        <Tab icon={<FaCalendarAlt />} label="Reservas" {...a11yProps(2)} />
        <Tab icon={<IoMdAnalytics />} label="Reportes" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ClientItem />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CuidadorItem />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReservaItem />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ReportesItem />
      </TabPanel>
    </Box>
  );
}
