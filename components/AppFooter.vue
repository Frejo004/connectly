<script setup lang="ts">
const columns = [
  {
    label: "Service",
    children: [
      { label: "Assitance" },
      { label: "Documentation" },
      { label: "Forum" },
      { label: "Contact" },
    ],
  },
  {
    label: "Ressources",
    children: [
      { label: "Starter Kits" },
      { label: "Release Notes" },
      { label: "Blog" },
      { label: "Partners" },
      { label: "News" },
      { label: "Jobs" },
      { label: "Careers" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "Cloud" },
      { label: "Forge" },
      { label: "Nightwatch" },
      { label: "Nova" },
    ],
  },
  {
    label: "Packages",
    children: [
      { label: "Cashier" },
      { label: "Dusk" },
      { label: "Horizon" },
      { label: "Octane" },
      { label: "Scout" },
      { label: "Pennant" },
      { label: "Pint" },
    ],
  },
];
</script>

<template>
  <UFooter>
    <template #top>
        <UContainer>
            <UFooterColumn :links="links">
                <template #right>
                    <form>
                        <UFormFiel name="email" label="S'incrire à notre newsletter" size="lg" />
                        <template #right >
                            <UButton type="submit" size="xs" color="orange" label="S'incrire" />
                        </template>
                    </form>
                </template >
            </UFooterColumn>
        </UContainer>
    </template>

    <template #left >
        <p class="text-sm">
            Copyright &copy; {{ new Date().getFullYear() }}. Tous droits réservés.
        </p>
    </template>

    <template #right >
        <UColorModeButton/>
    </template>

    <template #center >
        <UButon to="https://github" target="_blank" label="Visiter Mon GitHub"/>
    </template>


  </UFooter>
</template>
