import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ChangeEvent } from "react";
import { useGetLeagues } from "../../hooks/useGetLeagues.ts";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};
export default function FilterModal({ onSelect, current }: { onSelect: Function, current: string }) {
    const [open, setOpen] = React.useState(false);
    const { data: dataLeague } = useGetLeagues();

    const handleLeagueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const league = event.target.value;
        onSelect(league);
    };
    return (
        <div>
            <Button onClick={() => setOpen(true)} variant="text">
                Abrir filtros
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Filtrar por Liga de Fútbol
                    </Typography>
                    <Typography sx={{ mt: 2, mb: 1 }}>Seleccionar Liga</Typography>
                    <RadioGroup
                        onChange={handleLeagueChange}
                    >
                        <FormControlLabel
                            key={"todas"}
                            value={"todas"}

                            control={<Radio checked={current === "todas"} />}
                            label={"Todas"}
                        />
                        {dataLeague?.map((liga) => (
                            <FormControlLabel
                                key={liga.documentId}
                                value={liga.nombre}
                                control={<Radio checked={current === liga.nombre} />}
                                label={liga.nombre}
                            />
                        ))}
                    </RadioGroup>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                        <Button
                            variant="contained"
                            onClick={() => setOpen(false)}
                        >
                            Cerrar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
