import { useRouter } from 'next/router'
import { api } from "~/utils/api"
import { useAuth } from '@clerk/nextjs'


export default function Page() {
  const router = useRouter()
  
  const {data} = api.customTable.getAllCustomTables.useQuery()
  console.log(data)

    

  console.log()

  return <> <h1>{router.query.id}</h1> </>
}

