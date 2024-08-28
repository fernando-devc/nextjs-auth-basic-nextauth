import { BookOpenIcon, HomeIcon, MegaphoneIcon, BuildingIcon, UsersIcon, SettingsIcon } from 'lucide-react'

type IconProps = {
    icon:string
}
const Icons = ({icon}:IconProps) => {
    switch (icon) {
        case icon = 'home':
            return <HomeIcon className="h-4 w-4" />
        case icon = 'cursos':
            return <BookOpenIcon className="h-4 w-4" />
        case icon = 'campanhas':
            return <MegaphoneIcon className="h-4 w-4" />
        case icon = 'alunos':
            return <UsersIcon className="h-4 w-4" />
        case icon ='configuracoes':
            return <SettingsIcon className="h-4 w-4" />
        case icon = 'instituicoes':
            return <BuildingIcon className="h-4 w-4" />
        default:
            return <HomeIcon className="h-4 w-4" />
    }
}

export default Icons;