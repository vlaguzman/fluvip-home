source 'https://rubygems.org'

ruby '2.1.4'

gem 'rake'

gem 'i18n'

gem 'compass', '~> 1.0.1'
gem 'erubis', '~> 2.7.0'

group :production do
  gem 'newrelic_rpm'
  gem "passenger"
end

group :development do
  gem 'awesome_print'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'foreman'
end

group :development, :test do
  gem 'pry'
  gem 'pry-remote'
  gem 'pry-stack_explorer'
  gem 'pry-byebug'
end

# Padrino Stable Gem
gem 'padrino', '0.12.4'