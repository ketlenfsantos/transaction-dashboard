import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";


const searchFormSchema = z.object({
    query: z.string(),
})

// retorna qual a tipagem dos campos do nosso formulario
type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {

    // chamar função para   LISTAR as transações, la na transactions vai puxar
    const fetchTransactions = useContextSelector(
        TransactionsContext, (context) => {
            return context.fetchTransactions
        })

    //criação de formulario
    const {
        register,
        handleSubmit,
        // retorna se o formulario esta enviando as informações ou não 
        formState: {
            isSubmitting
        }

    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    }
    )

    // nome inicial handle pra simbolizar que essa funcao foi chamada pelo USUÁRIO
    async function handleSearchTransactions(data: SearchFormInputs) {

        await fetchTransactions(data.query)

    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register('query')}

            />

            {/* isSubmitting disabilita botão enquanto as informações estao snedo processadas */}

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar

            </button>

        </SearchFormContainer>
    )
}