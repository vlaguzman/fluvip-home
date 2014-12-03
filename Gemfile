source 'https://rubygems.org'

# Distribute your app as a gem
# gemspec
ruby '2.1.4'
# Server requirements
# gem 'thin' # or mongrel
# gem 'trinidad', :platform => 'jruby'

# Optional JSON codec (faster performance)
# gem 'oj'

# Project requirements
gem 'rake'

# Component requirements
gem 'compass', '~> 1.0.1'
gem 'erubis', '~> 2.7.0'

# Test requirements

group :production do
  gem 'newrelic_rpm'
  gem "passenger"
end

group :development do
  gem 'awesome_print'
  gem 'better_errors'
  gem 'binding_of_caller'
end

group :development, :test do
  gem 'pry'
  gem 'pry-remote'
  gem 'pry-stack_explorer'
  gem 'pry-byebug'
end

# Padrino Stable Gem
gem 'padrino', '0.12.4'

# Or Padrino Edge
# gem 'padrino', :github => 'padrino/padrino-framework'

# Or Individual Gems
# %w(core support gen helpers cache mailer admin).each do |g|
#   gem 'padrino-' + g, '0.12.4'
# end
