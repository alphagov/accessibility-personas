require 'govuk_tech_docs'

GovukTechDocs.configure(self)

set :layout, :core

configure :development do
  config[:tech_docs][:service_link] = '/'
end

# use relative paths for links and sources
activate :relative_assets
set :relative_links, true
