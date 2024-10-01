import React, { ReactNode } from 'react';
import { UserProvider } from '../context/UserContext';
import { CategoryProvider } from '../context/CategoryContext';

type ProviderComponent = React.ComponentType<{ children: ReactNode }>;

interface CombinedProvidersProps {
    children: ReactNode;
    providers?: ProviderComponent[];
}

const defaultProviders: ProviderComponent[] = [
    CategoryProvider,
    UserProvider,
];

export const CombinedProviders: React.FC<CombinedProvidersProps> = ({
    children,
    providers = defaultProviders
}) => {
    return providers.reduceRight(
        (acc, Provider) => <Provider>{acc}</Provider>,
        children
    );
};
