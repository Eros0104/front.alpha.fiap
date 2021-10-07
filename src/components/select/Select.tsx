import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface Itens {
  value: any;
  text: string;
}

interface Props {
  label: string;
  onChange: (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
    child: React.ReactNode,
  ) => void;
  itens: Itens[];
  value: any;
}

const renderItens = (itens: Itens[]) =>
  itens.map(item => (
    <MenuItem key={item.text} value={item.value}>
      {item.text}
    </MenuItem>
  ));

const SelectComponent: React.FC<Props> = ({
  label,
  onChange,
  itens,
  value,
}) => (
  <FormControl variant="standard">
    <InputLabel>{label}</InputLabel>
    <Select onChange={onChange} value={value} label={label}>
      {renderItens(itens)}
    </Select>
  </FormControl>
);

export default SelectComponent;
