import { TableForm } from "@/components/ui/addTableForm";
import { TableDialog } from '@/components/ui/addTableDialog';
import { TableDialogCustom } from '@/components/ui/addTableDialogCustom';


export default function Page() {
  return (
    <>
      <TableForm/>
      <TableDialog/>
      <TableDialogCustom/>
    </>
  );
}
